const express = require('express')
const router = express.Router()
const { getAttempts, createAttempt, getAttemptByUserId,
        getAttemptsByActivityId, getUserAttemptsByActivityId } = require('../controllers/attempts.controller')

router.get('/', getAttempts)

router.post('/', createAttempt)

router.get('/user/:userId', getAttemptByUserId)

router.get('/activity/:activityId', getAttemptsByActivityId)

router.get('/user/:userId/activity/:activityId', getUserAttemptsByActivityId)

module.exports = router
