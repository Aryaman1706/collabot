const mongoose = require('mongoose');
const Joi = require('@hapi/joi');
const moment = require('moment');

const messageSchema = new mongoose.Schema({
    sender:{
        type: String,
        required: true
    },
    text:{
        type: String,
        required: true
    },
    date:{
        type: String,
        default: moment().format('lll')
    }
});

function validateMessage(message) {
    const schema = {
       sender: Joi.string().required(),
       text: Joi.string().required(),
       date: Joi.string()
    };

    return Joi.validate(message, schema);
};

const Message = mongoose.model('Message', messageSchema);

exports.Message = Message;
exports.validate = validateMessage;