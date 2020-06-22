const express = require("express");
const mongoose = require("mongoose");

mongoose.set("useFindAndModify", false);

const auth = require("../middleware/auth");
const projectTeam = require("../middleware/projectTeam");
const isTeamMember = require("../functions/teamMember");

const { Project, validateProject } = require("../model/project");
const { User, validateUser } = require("../model/user");

const router = express.Router();

// Requests -->

// get request -> To get basic details of project
router.get("/:id", [auth, projectTeam], async (req, res) => {
  // get project
  const project = await Project.findById(req.params.id)
    .select("title description active lead")
    .populate("lead", "username email");

  res.send(project);
});

// get request -> open a project
router.get("/open/:id", [auth, projectTeam], async (req, res) => {
  // get project
  const project = await Project.findById(req.params.id)
    .select("-messages")
    .populate("lead team", "username email")
    .populate("tasks", "title description completed");

  res.send(project);
});

// post request -> Add a project
router.post("/", auth, async (req, res) => {
  const { error } = validateProject(req.body);
  if (error) return res.status(400).send("Invalid request");

  let project = new Project({
    title: req.body.title,
    description: req.body.description,
  });

  // adding yourself to team
  let me = await User.findById(req.user._id).select(
    "_id username email projects"
  );
  // push yourself in team
  project.team.push(me._id);

  // push project in your projects array
  me.projects.push(project._id);

  me = await me.save();

  project = await project.save();
  res.json(project);
});

// put request -> Change title/description/refrences
router.put("/:id", [auth, projectTeam], async (req, res) => {
  const { error } = validateProject(req.body);
  if (error) return res.status(400).send("Invalid request");

  const project = await Project.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      description: req.body.description,
      refrences: req.body.refrences,
    },
    { new: true }
  );

  res.json(project);
});

// put request -> To add a team member
router.put("/add/:id", [auth, projectTeam], async (req, res) => {
  let project = await Project.findById(req.params.id).select("team");

  let newMember = await User.findOne({ email: req.body.email }).select(
    "username email _id projects"
  );

  if (!newMember) {
    return res.send("No user found");
  }

  if (!isTeamMember(project, newMember)) {
    // pushing user to project
    project.team.push(newMember._id);

    // pushing project to user
    newMember.projects.push(project._id);

    project = await project.save();
    newMember = await newMember.save();
  }
  res.json({
    project: project,
    user: newMember,
  });
});

// put request -> To delete a team member
router.put("/remove/:id", [auth, projectTeam], async (req, res) => {
  let project = await Project.findById(req.params.id).select("team _id");

  let user = await User.findOne({ email: req.body.email }).select("projects");

  // deleted user from project
  project.team = project.team.filter((member) => !member.equals(user._id));

  // delete project from user
  user.projects = user.projects.filter((x) => !x.equals(project._id));

  user = await user.save();

  project = await project.save();

  res.json(project);
});

// put request -> Change lead
router.put("/lead/:id", [auth, projectTeam], async (req, res) => {
  // found the user
  const lead = await User.findOne({ email: req.body.email }).select(
    "_id username email"
  );

  // find the project
  let project = await Project.findById(req.params.id).select("lead team");

  // check if user is team member of project
  if (!isTeamMember(project, lead)) {
    return res.send("Not a team member");
  }
  // set project's lead to this user
  project.lead = lead._id;
  // save the project
  project = await project.save();

  res.json({
    project: project,
    lead: lead,
  });
});

// -->

module.exports = router;
