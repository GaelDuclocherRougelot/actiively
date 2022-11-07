const organismDatamapper =  require('../../models/v1/organism')
const customApiError = require('../../errors/apiErrors')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
    async register(req, res) {
        const { email, name, password, description, contact_email, phone_number } = req.body;
        
        try {
                let organismHashed = await bcrypt.hash(password, 10).then((hash) => {
                    return organismWithHashedPassword = {
                        "email": email,
                        "name": name,
                        "password": hash,
                        "description": description,
                        "contact_email": contact_email,
                        "phone_number": phone_number
                        };
                    }) 
                    console.log('organism successfuly created =>>> ', organismHashed);
                    await organismDatamapper.createOrganism(organismHashed)

        } catch(err) {
            throw new customApiError(err.message, 400)
        }

    }
            
}
