const express = require('express')
const router = express.Router()
const { createUser, getUsers, getUserByEmail, getUserByUsername } = require('../services/users.service')

router.get('/', async (req, res, next) => {
    try {
        res.json(await getUsers())
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const user = await createUser(req.body)
        res.status(201).json(user)
    } catch (error) {
        next(error)
    }
})

router.get('/email/:email', async (req, res, next) => {
    try {
        const user = await getUserByEmail(req.params.email)
        res.json(user)
    } catch (error) {
        next(error)
    }
})

router.get('/username/:username', async (req, res, next) => {
    try {
        const user = await getUserByUsername(req.params.username)
        res.json(user)
    } catch (error) {
        next(error)
    }
})

module.exports = router