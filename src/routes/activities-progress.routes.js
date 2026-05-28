const express = require('express')
const router = express.Router()
const { getActivitiesProgress, createActivityProgress, getActivitiesProgressByUserId,
        getActivitiesProgressByActivityId, getProgressByUserAndActivity } = require('../controllers/activities-progress.controller')

router.get('/', getActivitiesProgress)

router.post('/', createActivityProgress)

router.get('/activity/:activityId', getActivitiesProgressByActivityId)

router.get('/user/:userId', getActivitiesProgressByUserId)

router.get('/user/:userId/activity/:activityId', getProgressByUserAndActivity)

module.exports = router
