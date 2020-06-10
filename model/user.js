const mongoose = require('mongoose');
const Joi = require('joi');

const { Project } = require('./project');

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        default: null
    },
    username:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        maxlength: 10,
        default: null
    },
    projects:{
        type: Array,
        default: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Project'
        }] // array of ids of projects
    }
});

function validateUser(user) {
    const schema = {
        email: Joi.string().email().required(),
        password: Joi.string().min(8).max(12),
        username: Joi.string().min(5).required(),
        phone: Joi.string().max(10),
        projects: Joi.array()
    };

    return Joi.validate(user, schema);
};

const User = mongoose.model('User', userSchema);

exports.User = User;
exports.validateUser = validateUser;