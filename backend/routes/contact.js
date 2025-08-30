const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');


// POST /api/contact
router.post('/', async (req, res) => {
try {
const { name, email, phone, address, message } = req.body;
const c = new Contact({ name, email, phone, address, message });
await c.save();
res.json({ message: 'Contact submitted' });
} catch (err) {
res.status(500).json({ message: 'Server error' });
}
});


module.exports = router;