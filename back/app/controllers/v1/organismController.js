const organismDatamapper =  require('../../models/v1/organism')
const customApiError = require('../../errors/apiErrors')
const jwt = require('jsonwebtoken');

module.exports = {
    async register(req, res) {
        const organismEmails = await organismDatamapper.findAllEmails();

        organismEmails.forEach(email => {
            if(req.body.email === email) {
                throw new customApiError(`Organism already exists with this ${email}`, { statusCode: 400 });
            }
        });

        const organismCreated = await organismDatamapper.createOrganism(req.body);
        return organismCreated.rows
    }
}