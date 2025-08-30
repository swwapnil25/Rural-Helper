const express = require('express');
const router = express.Router();
const Product = require('../models/Product');


// GET /api/products
// optional: ?search=term
router.get('/', async (req, res) => {
try {
const { search } = req.query;
let query = {};
if (search) {
const rx = new RegExp(search, 'i');
query = { name: rx };
}
const products = await Product.find(query).limit(100);
res.json(products);
} catch (err) {
res.status(500).json({ message: 'Server error' });
}
});


module.exports = router;