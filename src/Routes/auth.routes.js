const express = require('express');

const authRequestValidator = require('../Middlewares/authRequest.validator');
const userController = require('../Controller/user.controller');

const authRouter = express.Router();

authRouter.post('/signup', authRequestValidator.validateUserSignup, userController.signUp);
authRouter.post('/signin', authRequestValidator.validateSignin, userController.signin);

module.exports = authRouter;