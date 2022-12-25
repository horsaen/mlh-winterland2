const express = require('express');
const User = require('../models/user')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const users = await User.find({}, {publickey: 0})
        res.json(users)
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})
router.post('/', async (req, res) => {
    const user =  new User({
        username: req.body.username,
        publickey: req.body.publickey,
        hkeywords: req.body.hkeywords,
        nkeywords: req.body.nkeywords,
        recipes: req.body.recipes
    })
    try {
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})
router.get('/:username', getUserID, async (req, res) => {
    res.json(res.user)
})

router.get('/manage/:publickey', getPk, async (req, res) => {
    res.json(res.user2)
})

async function getUserID (req, res, next) {
    let user
    try {
        user = await User.find({ username: req.params.username}, {publickey: 0})
        if (user == null) {
            return res.status(404).json({ message: 'Cannot find user' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.user = user
    next()
}

async function getPk (req, res, next) {
    let user2
    try {
        user2 = await User.find({ publickey: req.params.publickey})
        if (user2 == null) {
            return res.status(404).json({ message: 'Cannot find user' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.user2 = user2
    next()
}

module.exports = router