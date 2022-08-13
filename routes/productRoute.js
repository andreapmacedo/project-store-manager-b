const express = require('express');
const productController = require('../controllers/productsController');

const productRoute = express.Router();

productRoute.get('/', productController.getAll);
productRoute.get('/:id', productController.getById);

module.exports = productRoute;