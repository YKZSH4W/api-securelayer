const express = require('express')
const router = express.Router()
const { createActivity, getActivities } = require('../services/activities.service')

router.get('/', async (req, res) => {
    res.json(await getActivities())
})

router.post('/', async (req, res) => {
    const activity = await createActivity(req.body)
    res.status(201).json(activity)
})

module.exports = router