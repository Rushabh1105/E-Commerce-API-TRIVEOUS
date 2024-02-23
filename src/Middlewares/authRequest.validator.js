const validateUserSignup = (req, res, next) => {
    if (!req.body.name || !req.body.email || !req.body.password) {
        return res.status(400).json({
            data: {},
            success: false,
            message: 'Bad request',
            err: 'Missing email or password',
        })
    }

    next();
}

const validateSignin = (req, res, next) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({
            data: {},
            success: false,
            message: 'Bad request',
            err: 'Missing email or password',
        })
    }

    next();
}


module.exports = {
    validateUserSignup,
    validateSignin,
}