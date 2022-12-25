const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {},
    publickey: {},
    keywords: {},
    recipes: {}
})

module.exports = mongoose.model('user', userSchema);