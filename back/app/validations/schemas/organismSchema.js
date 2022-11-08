const joi = require('joi');

module.exports = joi.object({
    email: joi.string().pattern(new RegExp('(.+)@(.+){2,}\.(.+){2,}')).required(),
    name: joi.string().min(3).max(128).required(),
    password: joi.string().min(3).max(128).required().pattern(new RegExp('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$')),
    description: joi.string(),
    contact_email: joi.string().pattern(new RegExp('(.+)@(.+){2,}\.(.+){2,}')).min(3).max(128),
    phone_number: joi.string().pattern(new RegExp('^(?:(?:(?:\\+|00)33[ ]?(?:\\(0\\)[ ]?)?)|0){1}[1-9]{1}([ .-]?)(?:\d{2}\1?){3}\d{2}$'))
});