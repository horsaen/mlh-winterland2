const express = require('express');
const User = require('../models/user')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.get('/:username', getUserID, async (req, res) => {
    res.json(res.user)
})

async function getUserID (req, res, next) {
    let user
    try {
        user = await User.find({ username: req.params.username})
        if (user == null) {
            return res.status(404).json({ message: 'Cannot find user' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.user = user
    next()
}

module.exports = router