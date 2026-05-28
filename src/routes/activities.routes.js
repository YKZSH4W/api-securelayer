const express = require('express')
const router = express.Router()
const { getActivities, createActivity, getActivitiesByLessonId } = require('../controllers/activities.controller')

router.get('/', getActivities)

router.post('/', createActivity)

router.get('/lesson/:lessonId', getActivitiesByLessonId)

module.exports = router
