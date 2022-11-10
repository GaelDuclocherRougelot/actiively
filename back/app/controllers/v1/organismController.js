const organismDatamapper =  require('../../models/v1/organism');
const customApiError = require('../../errors/apiErrors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {createTokens} = require('../../middlewares/JWT');
const cookieParser = require('cookie-parser');



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
                    await organismDatamapper.createOrganism(organismHashed)
                    res.status(200).json({message: `Organism with email ${organismHashed.email} successfully created !`})

        } catch(err) {
            throw new customApiError(err.message, 400)
        }

    },

    async login(req, res) {
        const { email, password } = req.body;
        // console.log("req.body:", req.body);

        try {
            console.log("request received");
            const organism = await organismDatamapper.findOneOrganism(email);
            const dbPassword = organism.password;

            await bcrypt.compare(password, dbPassword)
            .then((match) => {
                if(match){

                    const accessToken = createTokens(organism);
                    res.cookie("access_token", accessToken, {
                        maxAge: 300000,
                        httpOnly: true
                    });
                    // console.log('token :', accessToken);
                    
                    // res.json({"message": "LOGGED IN"})
                    res.send({
                        authenticated: true,
                        token: accessToken,
                        message: "Authentication Successful."})                    

                }else {
                    throw new Error('Wrong password and email combination!')
                }
            });
            req.user = organism

        } catch (err) {
            res.json({error: 'Wrong password and email combination'})
            throw new customApiError(err.message, 400)
        }
    },

    async profile(req, res) {
        console.log('access decodedToken:', req.decodedToken.email);
        const organism = await organismDatamapper.findOneOrganism(req.decodedToken.email);

        res.json({message: 'PROFILE', connected: req.authenticated, user: organism});
    },

    async getOrganismActivities(req, res) {
        const activities = await organismDatamapper.findActivitiesByOrganism(req.decodedToken.email);
        try {
            res.json(activities);
        } catch (error) {
            res.json({error: error.message});
            throw new customApiError(err.message, 400);
        }
    }
            
}
