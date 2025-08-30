const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


// POST /api/register
router.post('/register', async (req, res) => {
try {
const { name, email, password, phone } = req.body;
if (!name || !email || !password) return res.status(400).json({ message: 'Missing fields' });
const existing = await User.findOne({ email });
if (existing) return res.status(400).json({ message: 'Email already registered' });
const salt = await bcrypt.genSalt(10);
const hashed = await bcrypt.hash(password, salt);
const user = new User({ name, email, password: hashed, phone });
await user.save();
const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
res.json({ token, user: { _id: user._id, name: user.name, email: user.email, phone: user.phone } });
} catch (err) {
console.error(err);
res.status(500).json({ message: 'Server error' });
}
});


// POST /api/login
router.post('/login', async (req, res) => {
try {
const { email, password } = req.body;
if (!email || !password) return res.status(400).json({ message: 'Missing fields' });
const user = await User.findOne({ email });
if (!user) return res.status(400).json({ message: 'Invalid credentials' });
const match = await bcrypt.compare(password, user.password);
if (!match) return res.status(400).json({ message: 'Invalid credentials' });
const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
res.json({ token, user: { _id: user._id, name: user.name, email: user.email, phone: user.phone } });
} catch (err) {
console.error(err);
res.status(500).json({ message: 'Server error' });
}
});


module.exports = router;