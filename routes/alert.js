const express = require('express');
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

const auth = require('../middleware/auth');
const taskLead = require('../middleware/taskLead');

const {Alert, validateAlert} = require('../model/alert');
const { Task } = require('../model/task');

const router = express.Router();

// Requests -->

// Post request -> Add alert to task
router.post('/:id', [auth, taskLead], async(req, res)=>{
    const {error} = validateAlert(req.body);
    if(error) return res.send("Invalid Request");
    
    // create a alert
    const alert = new Alert({
        text: req.body.text
    });
    alert = await alert.save();
    
    // find task from req.params.id and add alert
    let task = await Task.findByIdAndUpdate(req.params.id,{
        alert: alert
    }, {new: true});

    res.send(task);
});

// Delete request -> Remove and delete alert
router.delete('/:id', [auth, taskLead], async(req,res)=>{
    // remove alert from task
    const task = await Task.findByIdAndUpdate(req.params,id, {
        alert: null
    }, {new: true});

    // delete alert from db
    const alert = await Alert.findByIdAndRemove(req.body._id);

    res.send(task);
});

// -->

module.exports = router;