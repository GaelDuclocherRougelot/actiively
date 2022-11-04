const joi = require('joi');

module.exports = joi.object({
    email: joi.string().pattern(new RegExp('^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$')).min(3).max(128),
    name: joi.string().min(3).max(128).required(),
    password: joi.string().min(3).max(128).required().pattern(new RegExp('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$')),
    description: joi.string(),
    contact_email: joi.string().pattern(new RegExp('^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$')).min(3).max(128),
    phone_number: joi.string().pattern(new RegExp('/(\(\+33\)|0|\+33|0033)[1-9]([0-9]{8}|([0-9\- ]){12})/g'))
});