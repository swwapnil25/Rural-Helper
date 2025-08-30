const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const auth = require('../middleware/auth');


// POST /api/bookings (protected)
router.post('/', auth, async (req, res) => {
try {
const { items, total } = req.body;
if (!items || !Array.isArray(items) || items.length === 0) return res.status(400).json({ message: 'Cart is empty' });
const booking = new Booking({ user: req.userId, items, total });
await booking.save();
res.json({ message: 'Booking saved', booking });
} catch (err) {
res.status(500).json({ message: 'Server error' });
}
});


// GET /api/bookings (protected)
router.get('/', auth, async (req, res) => {
try {
const bookings = await Booking.find({ user: req.userId }).sort({ createdAt: -1 });
res.json(bookings);
} catch (err) {
res.status(500).json({ message: 'Server error' });
}
});


module.exports = router;