const express = require('express')
const router = express.Router()
const { getActivitiesProgress, createActivityProgress, getActivitiesProgressByUserId,
        getActivitiesProgressByActivityId, getProgressByUserAndActivity, completeActivity } = require('../controllers/activities-progress.controller')

router.get('/', getActivitiesProgress)

router.post('/', createActivityProgress)

router.post('/complete', completeActivity)

router.get('/activity/:activityId', getActivitiesProgressByActivityId)

router.get('/user/:userId', getActivitiesProgressByUserId)

router.get('/user/:userId/activity/:activityId', getProgressByUserAndActivity)

module.exports = router
