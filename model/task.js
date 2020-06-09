const mongoose = require('mongoose');
const Joi = require('joi');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {  
        type: String,
        required: true
    },
    refrences: {
        type: String,
        default: null
    },
    taskLead: {
        type: String, // id of lead user
        default: null
    },
    assignedTo: {
        type: Array,
        default: []
    },
    reportTo: {
        type: Array,
        default: []
    },
    messages: {
        type: Array,
        default: [] // array of message object
    },
    alert:{
        type: String,
        default: null
    },
    completed:{
        type: Boolean,
        default: false
    }    
});

function validateTask(task) {
    const schema = {
        title: Joi.string().required(),
        description: Joi.string().required(),
        refrences: Joi.string(),
        taskLead: Joi.string(),
        assignedTo: Joi.array(),
        reportTo: Joi.array(),
        messages: Joi.array(),
        alert: Joi.string(),
        completed: Joi.boolean()
    };

    return Joi.validate(task, schema);
};

const Task = mongoose.model('Task', taskSchema);

exports.Task = Task;
exports.validate = validateTask;