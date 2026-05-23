const express = require('express')
const router = express.Router()
const { createEnroll, getEnrolls } = require('../controllers/enrolls.controller')

router.get('/', getEnrolls)

router.post('/', createEnroll)

module.exports = router