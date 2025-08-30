const express = require('express');
const router = express.Router();
const User = require('../models/User');
const auth = require('../middleware/auth');


// PUT /api/users/:id (protected) - update name/phone
router.put('/:id', auth, async (req, res) => {
try {
const { id } = req.params;
if (id !== req.userId) return res.status(403).json({ message: 'Not allowed' });
const { name, phone } = req.body;
const user = await User.findByIdAndUpdate(id, { name, phone }, { new: true }).select('-password');
res.json({ message: 'Profile updated', user });
} catch (err) {
res.status(500).json({ message: 'Server error' });
}
});


module.exports = router;