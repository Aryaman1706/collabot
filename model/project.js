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
    team: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    lead: {
        type: mongoose.Schema.Types.ObjectId, // id of lead user
        ref: 'User'
    },
    tasks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Task'
        }
    ],
    active: {   
        type: Boolean,
        default: true
    },
    messages: {
        type: Array,
        default: []
    }
});

function validateProject(project) {
    const schema = {
        title: Joi.string().required(),
        description: Joi.string().required(),
        refrences: Joi.string(),
        team: Joi.array(),
        lead: Joi.string().email(),
        tasks: Joi.array(),
        active: Joi.boolean(),
        messages: Joi.array()
    };

    return Joi.validate(project, schema);
};

const Project = mongoose.model('Project', projectSchema);

exports.Project = Project;
exports.validateProject = validateProject;