const express = require('express')
const router = express.Router()
const { getEnrolls, createEnroll, getEnrollsByUserId, completeRouteAndAdvance } = require('../controllers/enrolls.controller')

router.get('/', getEnrolls)

router.post('/', createEnroll)

router.post('/complete-and-advance', completeRouteAndAdvance)

router.get('/user/:userId', getEnrollsByUserId)

module.exports = router
