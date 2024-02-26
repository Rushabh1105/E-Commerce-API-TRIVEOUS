const express = require('express');

const { jwtAuth } = require('../Middlewares/jwtAuth.middleware');
const cartController = require('../Controller/cart.controller');

const cartRouter = express.Router();

cartRouter.post('/:id/add', jwtAuth, cartController.addToCart);
cartRouter.get('/', jwtAuth, cartController.getUserCart);
cartRouter.delete('/:id/delete', jwtAuth, cartController.removeItemFromCart);
cartRouter.put('/:id/update', jwtAuth, cartController.updateUserCart);

module.exports = cartRouter;