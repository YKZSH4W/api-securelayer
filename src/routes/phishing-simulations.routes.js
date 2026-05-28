const express = require('express')
const router = express.Router()
const { getPhishingSimulations, createPhishingSimulation, getPhishingSimulationsById } = require('../controllers/phishing-simulations.controller')

router.get('/', getPhishingSimulations)

router.post('/', createPhishingSimulation)

router.get('/activity/:activityId', getPhishingSimulationsById)

module.exports = router
