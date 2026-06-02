const express = require('express')
const router = express.Router()
const { registerUser, getUsers, getUserByEmail, loginUser } = require('../controllers/users.controller')

router.get('/', getUsers)

router.get('/email/:email', getUserByEmail)

router.post('/auth/register', registerUser)

router.post('/auth/login', loginUser)

module.exports = router