const CustomApiError = require('../errors/apiErrors');
module.exports = function(schema) {
    return async function (req, res, next) {
        const dataToValidate = req.body
        
        try {
            await schema.validateAsync(dataToValidate);
            next();
        } catch (err) {
            console.log(err);
            next(new CustomApiError(err.message, 400))
        }
    };
};