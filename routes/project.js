const express = require('express');
const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);

const auth = require('../middleware/auth');
const projectTeam = require('../middleware/projectTeam');
const isTeamMember = require('../functions/teamMember');

const { Project, validateProject } = require('../model/project');
const { User } = require('../model/user');

const router = express.Router();

// Requests -->

// get request -> To get basic details of project
router.get('/:id', [auth, projectTeam], async(req, res)=>{
    // get project
    const project = await Project.findById(req.params.id)
    .select('title description active lead')
    .populate('lead', 'username email');

    res.send(project);
});

// get request -> open a project
router.get('/open/:id', [auth, projectTeam] , async (req, res)=>{
    // get project
    const project = await Project.findById(req.params.id)
    .select('-messages')
    .populate('lead team', 'username email')
    .populate('tasks', 'title description completed');

    res.send(project);
});

// post request -> Add a project
router.post('/', auth, async(req, res) => {
    let project = new Project({
        title: req.body.title,
        description: req.body.description
    });
    // add a lead
        // find the user
        let lead = await User.find({email: req.body.email})
        .select('_id username email projects');

        // pushing lead in team of project
        project.team.push(lead._id);

        // pushing project in projects of lead
        lead.projects.push(project._id);

        // setting lead of project to this lead
        project.lead = lead; 

    // adding yourself to team
        const me = await User.findById(req.user._id)
        .select('_id username email projects');
        
        // push yourself in team
        project.team.push(me._id);

        // push project in your projects array
        me.projects.push(project._id);

        me = await me.save();

    project = await project.save();
    lead = await lead.save();
    res.json({
        project: project,
        lead: lead
    });
});

// put request -> Change title/description/refrences
router.put('/:id', [auth, projectTeam] ,async(req, res)=>{
    const project = await Project.findByIdAndUpdate(req.params.id,{
        title: req.body.title,
        description: req.body.description,
        refrences: req.body.refrences
    }, {new: true});

    res.json(project);
});

// put request -> To add a team member
router.put('/add/:id', [auth, projectTeam] ,async(req, res)=>{
    let project = await Project.findById(req.params.id)
    .select('team');

    const newMember = await User.find({email: req.body.email})
    .select('username email _id projects');
    
    if( !isTeamMember(project, newMember) ){
        // pushing user to project
        project.team.push(newMember._id);
    
        // pushing project to user
        User.projects.push(project._id);
        
        project = await project.save();
        newMember = await newMember.save();
    };
    res.json({
        project: project,
        user: newMember
    });
});

// put request -> To delete a team member
router.put('/remove/:id', [auth, projectTeam] ,async(req, res)=>{
    let project = await Project.findById(req.params.id)
    .select('team _id');

    // deleted user from project
    project.team.filter(
        member => member != req.body.userId
    );
    
    // delete project from user
    const user = await User.findById(req.body.userId)
    .select('projects');

    user.projects.filter(
        x => x != project._id
    );

    user = await user.save();

    project = await project.save();

    res.json(project);
});

// put request -> Change lead
router.put('/lead/:id', [auth, projectTeam] ,async(req, res)=>{  
    // found the user  
    const lead = await User.find({email: req.body.email})
    .select('_id username email');
    
    // find the project
    let project = await Project.findById(req.params.id)
    .select('lead team');

    // check if user is team member of project
    if( isTeamMember(project, lead) ){

        // set project's lead to this user
        project.lead = lead;
        // save the project
        project = await project.save();

        res.json({
            project: project,
            lead: lead
        });
    };
});

// -->