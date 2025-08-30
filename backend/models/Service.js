const mongoose = require('mongoose');


const serviceSchema = new mongoose.Schema({
name: String,
iconUrl: String
});


module.exports = mongoose.model('Service', serviceSchema);