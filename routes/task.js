const express = require('express');
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

const auth = require('../middleware/auth');
const lead = require('../middleware/projectLead');
const taskLead = require('../middleware/taskLead');

const { Task, validateTask } = require('../model/task');
const { Project, validateProject } = require('../model/project');
const { User, validateUser } = require('../model/user');

const { isTeamMember } = require('../functions/teamMember');
const { isTaskLead } = require('../functions/taskLead');
const { alreadyAssigned } = require('../functions/alreadyAssigned');
const { alreadyReport } = require('../functions/alreadyReport');

const router = express.Router();

// Requests -->

// get request -> get basic info of task
router.get('/:id', auth, async(req, res)=>{
    const task = await Task.findById(req.params.id)
    .select('title description taskLead completed')
    .populate('taskLead', 'username email _id');

    res.json(task);
});

// get request -> open the task
router.get('/open/:id', auth, async (req, res)=>{
    const task = await Task.findById(req.params.id)
    .select('-messages')
    .populate('taskLead assignedTo reportTo', 'username email _id');

    res.json(task);
});

// post request -> add a task to project
router.post('/addTask/:id', [auth,lead], async(req,res)=>{
    
    const { error } = validateTask(req.body);
    if( error ) return res.status(400).send("Invalid request");

    // find project from req.params.id
    let project = await Project.findById(req.params.id)
    .select('tasks team');
    
    // create a new task
    let task = new Task({
        title: req.body.title,
        description: req.body.description
    });

    // add taskLead to task
        // find the user
        const taskLead = await User.find({email: req.body.taskLead})
        .select('username email _id');
        // check if user is already a team member
        if( !isTeamMember(project, taskLead) ){
            return res.send("Not a team member");
        };
        // add the user._id to task's taskLead
        task.taskLead = taskLead._id;
        task = await task.save();
    
    // add this task to project
    project.tasks.push(task);
    project = await project.save();

    res.json({
        task: task,
        taskLead: taskLead
    });
});

// put request -> Change title/description/refrences
router.put('/:id', auth, async(req, res)=>{

    const { error } = validateTask(req.body);
    if(error) return res.send("Invalid request");

    const task = await Task.findByIdAndUpdate(req.params.id,{
        title: req.body.title,
        description: req.body.description,
        refrences = req.body.refrences
    },{ new: true });

    res.send(task);
});

// put request -> add a user to assignedTo
router.put('/addAssign/:id', [auth, taskLead], async (req, res) =>{
    // find the task from req.params.id
    let task = await Task.findById(req.params.id)
    .select('assignedTo');
    // check if user is already assigned
    if ( alreadyAssigned(task, req.body._id) ){
        return res.send("Already Assigned");
    };
    // push req.body._id to task.assignedTo
    task.assignedTo.push(req.body._id);
    // save task 
    task = await task.save();

    res.send(task);
});

// put request -> add a user to reportTo
router.put('/addReport/:id', [auth, taskLead], async (req, res) =>{
    // find the task from req.params.id
    let task = await Task.findById(req.params.id)
    .select('reportTo');
    // check if user is already added to reportTo
    if ( alreadyReport(task, req.body._id) ){
        return res.send("Already Report");
    };
    // push req.body._id to task.assignedTo
    task.reportTo.push(req.body._id);
    // save task 
    task = await task.save();

    res.send(task);
});

// put request -> remove a user from assignedTo
router.put('/removeAssign/:id', [auth, taskLead], async(req, res)=>{
    // find the task from req.params.id
    let task = await Task.findById(req.params.id)
    .select('assignedTo');
    // check if user is not in assignedTo
    if( !alreadyAssigned(task, req.body._id) ){
        return res.send("No such user in assignedTo");
    };
    // remove req.body._id from task.assignedTo
    task.assignedTo.filter(
        member => !member.equals(req.body._id) 
    );
    // save task
    task = await task.save();

    res.send(task);
});

// put request -> remove a user from reportTo
router.put('/removeReport/:id', [auth, taskLead], async(req, res)=>{
    // find the task from req.params.id
    let task = await Task.findById(req.params.id)
    .select('reportTo');
    // check if user is not in reportTo
    if( !alreadyReport(task, req.body._id) ){
        return res.send("No such user in reportTo");
    };
    // remove req.body._id from task.reportTo
    task.reportTo.filter(
        member => !member.equals(req.body._id) 
    );
    // save task
    task = await task.save();

    res.send(task);
});

// put request -> Change lead
router.put('/taskLead/:id', auth, async(req, res)=>{
    // find new lead
    const newLead = await User.findById(req.body._id)
    .select('email username _id');
    // check if new lead is a team member
    if( !isTeamMember(req.body.project, newLead) ){
        return res.send("not a team member");
    };
    // task findbyidandupdate
    const task = await Task.findByIdAndUpdate(req.params.id,{
        taskLead: newLead._id
    },{new: true});

    req.json({
        task: task,
        taskLead: newLead
    });
});

// -->