const mongoose = require('mongoose');
const Joi = require('joi');
const moment = require('moment');

const alertSchema = new mongoose.Schema({
    text:{
        type: String,
        required: true
    },
    date:{
        type: String,
        default: moment().format('lll')
    }
});

function validateAlert(alert) {
    const schema = {
        text: Joi.string().required(),
        date: Joi.string()
    };

    return Joi.validate(alert, schema);
};

const Alert = mongoose.model('Alert', alertSchema);

exports.Alert = Alert;
exports.validate = validateAlert;