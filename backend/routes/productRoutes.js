// backend/routes/productRoutes.js
const express = require('express');
const router = express.Router();
const { getProducts, addProduct } = require('../controllers/productController');

// GET all products
router.get('/', getProducts);

// POST a new product
router.post('/', addProduct);

module.exports = router;
