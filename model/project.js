const mongoose = require('mongoose');
const Joi = require('joi');

const projectSchema = new mongoose.Schema({
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
    team: {
        type: Array,
        default: [] // array of ids of user
    },
    lead: {
        type: String, // id of lead user
        default: null
    },
    tasks: {
        type: Array,
        default: [] // array of ids of task
    },
    active: {   
        type: Boolean,
        default: true
    },
    messages: {
        type: Array,
        default: [] // array of message object
    }
});

function validateProject(project) {
    const schema = {
        title: Joi.string().required(),
        description: Joi.string().required(),
        refrences: Joi.string(),
        team: Joi.array(),
        lead: Joi.string(),
        tasks: Joi.array(),
        active: Joi.boolean(),
        messages: Joi.array()
    };
};

const Project = mongoose.model('Project', projectSchema);

exports.Project = Project;
exports.validate = validateProject;