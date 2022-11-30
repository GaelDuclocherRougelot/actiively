const { expressjwt: jwt} = require("express-jwt");
const { sign, verify } = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;
const customApiError = require('../errors/apiErrors');
/**
 * Create a new jwt token
 * @param {object} organism
 * @returns accessToken
 */
const createTokens = (organism) => {
    const accessToken = sign({ id: organism.code_organism }, jwtSecret);
    return accessToken;
}
/**
 * Check if token is valid
 * @param {*} req headers.authorization
 * @param {*} res
 * @param {*} next 
 * @returns decodedToken & next()
 */
const validateToken = (req, res, next) => {
    const accessToken = req.headers.authorization

    if(!accessToken){
        return res.status(400).json({error: "User not Authenticated."});
    }

    try {
        const validToken = verify(accessToken, jwtSecret, (err, decodedToken) => {
            if(err){
                throw new Error('Bad access_token')
            }else {
                req.decodedToken = decodedToken;
                req.authenticated = true;
                return next();
            }
        });

    } catch (err) {
        res.json({error: err.message})
        throw new customApiError(err.message, 400)
    }
};

module.exports = {createTokens, validateToken};
