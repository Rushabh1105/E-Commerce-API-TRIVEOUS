const express = require('express');
const { jwtAuth } = require('../Middlewares/jwtAuth.middleware');

const categoryController = require('../Controller/category.controller');
const categoryRouter = express.Router();

categoryRouter.post('/new', jwtAuth, categoryController.addNewCategory);
categoryRouter.get('/', categoryController.getAllCategories);
categoryRouter.put('/:id/update', jwtAuth, categoryController.updateCategory);
categoryRouter.delete('/:id/delete', jwtAuth, categoryController.deleteCategory)

module.exports = categoryRouter;