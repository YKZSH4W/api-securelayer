const lessonService = require('../services/lessons.service')

const getLessons = async (req, res, next) => {
    try {
        const lessons = await lessonService.getLessons()
        res.json(lessons)
    } catch (error) {
        next(error)
    }
}

const createLesson = async (req, res, next) => {
    try {
        const { routeId, name, description, icon } = req.body
        const lesson = await lessonService.createLesson({
            routeId,
            name,
            description,
            icon
        })
        res.status(201).json(lesson)
    } catch (error) {
        next(error)
    }
}

const getLessonsByRouteId = async (req, res, next) => {
    try {
        const { routeId } = req.params
        const lessons = await lessonService.getLessonsByRouteId(routeId)
        res.json(lessons)
    } catch (error) {
        next(error)
    }
}


module.exports = {
    getLessons,
    createLesson,
    getLessonsByRouteId
}