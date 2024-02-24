const express = require('express');
const { jwtAuth } = require('../Middlewares/jwtAuth.middleware');

const productController = require('../Controller/product.controller');
const productRouter = express.Router();

productRouter.post('/new', jwtAuth, productController.createProduct);
productRouter.get('/:id', productController.getProductById);
productRouter.get('/', productController.getAllProducts);
productRouter.put('/:id/update', jwtAuth, productController.updateProduct);
productRouter.delete('/:id/delete', jwtAuth, productController.deleteProduct);

module.exports = productRouter;