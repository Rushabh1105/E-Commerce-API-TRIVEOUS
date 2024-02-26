const express = require('express');

const { jwtAuth } = require('../Middlewares/jwtAuth.middleware');

const orderController = require('../Controller/order.controller');
const orderRouter = express.Router();

orderRouter.post('/:id/place', jwtAuth, orderController.placeOrder);
orderRouter.get('/:id', jwtAuth, orderController.getOrderDetails);
orderRouter.get('/', jwtAuth, orderController.getAllUserOrders)

module.exports = orderRouter;