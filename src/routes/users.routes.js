const express = require('express')
const router = express.Router()
const { registerUser, getUsers, getUserByEmail, loginUser, updateUser, updateKnowledgeLevel } = require('../controllers/users.controller')

router.get('/', getUsers)

router.get('/email/:email', getUserByEmail)

router.post('/auth/register', registerUser)

router.post('/auth/login', loginUser)

router.put('/:id/knowledge-level', updateKnowledgeLevel)

router.put('/:id', updateUser)

module.exports = router