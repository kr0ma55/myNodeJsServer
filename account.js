const mongoose = require('mongoose');
const accountSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    firstName: String,
    lastName: String,
    email: String,
    zipCode: Number,
    password: String

})

module.exports = mongoose.model('Account', accountSchema);