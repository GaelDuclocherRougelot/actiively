const joi = require('joi');

module.exports = joi.object({
    name: joi.string().min(3).max(128).required(),
    description: joi.string().required(),
    address: joi.string().required(),
    zip_code: joi.integer().required().pattern(new RegExp('^[0-9]{2,5}(%)$')),
    city: joi.string().required().min(3).max(128),
    price: joi.float().required().min(0.1),
    price_type: joi.string().required().min(3).max(128),
    gender: joi.string().required().min(3).max(128),
    level: joi.string().required().min(3).max(128),
    pk_organism: joi.string().required().pattern(new RegExp('^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$')).min(3).max(128)

})