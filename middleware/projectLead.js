const isProjectLead = require("../functions/projectLead");
const { Project } = require("../model/project");

module.exports = async (req, res, next) => {
  const project = await Project.findById(req.params.id).select("lead");

  if (isProjectLead(project, req.user)) {
    next();
  } else {
    res.send("You are not the project lead.");
  }
};
