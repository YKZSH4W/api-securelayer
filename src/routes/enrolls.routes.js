const express = require('express')
const router = express.Router()
const { getEnrolls, createEnroll, getEnrollsByUserId } = require('../controllers/enrolls.controller')

router.get('/', getEnrolls)

router.post('/', createEnroll)

router.get('/user/:userId', getEnrollsByUserId) 

module.exports = router
