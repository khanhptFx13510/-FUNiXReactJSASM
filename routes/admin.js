const path = require('path');

const express = require('express');

const router = express.Router();

const products = [];
const rootDir = require('../util/path')
// /admin/add-product => Get
router.get('/add-product',(req, res, next) => {
   res.render('add-product', { pageTitle: 'Add Product' });
})

// /admin/add-product => POST
router.post('/add-product' , (req , res , next) => {
   products.push({ title: req.body.title });
   res.redirect('/');
})

exports.routes = router;
exports.products = products;