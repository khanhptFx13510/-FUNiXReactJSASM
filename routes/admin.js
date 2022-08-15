const path = require('path');

const express = require('express');

const router = express.Router();

const productsController = require('../controllers/products.js');

// /admin/add-product => Get
router.get('/add-product', productsController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product' , productsController.postAddProduct);

// exports.routes = router;
// exports.products = products;

module.exports = router;