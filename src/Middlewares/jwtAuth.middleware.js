const { JWT_KEY } = require("../config/serverConfig");
const jwt = require('jsonwebtoken');


const jwtAuth = async( req, res, next ) => {
    const token = req.headers['authorization'];
    // console.log(token)
    // Check if token is valid or not
    if(!token){
        return res.status(401).send('Unauthorized');
    }

    try {
        const payload = jwt.verify(token, JWT_KEY);
        console.log(payload)
        req.user = payload;
    } catch (error) {
        console.log(error)
        return res.status(401).send('Unauthorized');
    }

    next();
}

module.exports = {
    jwtAuth,
}