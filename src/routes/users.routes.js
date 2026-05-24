const express = require('express')
const router = express.Router()
const { createUser, getUsers, getUserByEmail, getUserByUsername } = require('../services/users.service')

router.get('/', async (req, res) => {
    res.json(await getUsers())
})

router.post('/', async (req, res) => {
    const user = await createUser(req.body)
    res.status(201).json(user)
})

router.get('/:email', async (req, res) => {
    const user = await getUserByEmail(req.params.email)
    res.json(user)
})

router.get('/:username', async (req, res) => {
    const user = await getUserByUsername(req.params.username)
    res.json(user)
})

module.exports = router