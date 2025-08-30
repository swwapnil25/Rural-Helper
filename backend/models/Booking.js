const mongoose = require('mongoose');


const bookingSchema = new mongoose.Schema({
user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
items: [
{
productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
name: String,
price: Number,
qty: Number
}
],
total: Number,
createdAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Booking', bookingSchema);