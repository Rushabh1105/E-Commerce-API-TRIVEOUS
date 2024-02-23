

const UserServiece = require("../Serviece/user.serviece");

const userServiece = new UserServiece();

const signUp = async(req, res, next) => {
    try {
        const response = await userServiece.createUser(req.body);
        return res.status(201).json({
            data: response.email,
            message: 'successfully sign up',
            success: true,
            err: {},
        })
    } catch (error) {
        console.log(error)
        next(error);
    }
}

const signin = async(req, res, next) => {
    try {
        const response = await userServiece.chechUser(req.body);
        return res.status(200).json({
            data: response,
            message: 'signin successfull',
            success: true,
            err: {},
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

module.exports = {
    signUp,
    signin
}