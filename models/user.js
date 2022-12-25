const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {},
    publickey: {},
    hkeywords: {
        type: [String]
    },
    nkeywords: {
        type: [String]
    },
    recipes: {
        type: [String]
    }
})

module.exports = mongoose.model('user', userSchema);