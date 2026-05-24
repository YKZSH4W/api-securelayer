const lessonProgressService = require('../services/lessons-progress.service')

const getLessonsProgress = async (req, res, next) => {
    try {
        const lessons = await lessonProgressService.getLessonsProgress()
        res.json(lessons)
    } catch (error) {
        next(error)
    }
}

const createLessonProgress = async (req, res, next) => {
    try {
        const { userId, lessonId } = req.body
        const lessonProgress = await lessonProgressService.createLessonProgress({
            userId,
            lessonId
        })
        res.status(201).json(lessonProgress)
    } catch (error) {
        next(error)
    }
}

const getLessonsProgressByUserId = async (req, res, next) => {
    try {
        const { userId } = req.params
        const lessonsProgress = await lessonProgressService.getLessonsProgressByUserId(userId)
        res.json(lessonsProgress)
    } catch (error) {
        next(error)
    }
}

const getLessonsProgressByLessonId = async (req, res, next) => {
    try {
        const { lessonId } = req.params
        const lessonsProgress = await lessonProgressService.getLessonsProgressByLessonId(lessonId)
        res.json(lessonsProgress)
    } catch (error) {
        next(error)
    }
}

const getProgressByUserAndLesson = async (req, res, next) => {
    try {
        const { userId, lessonId } = req.params
        const progress = await lessonProgressService.getProgressByUserAndLesson(userId, lessonId)
        res.json(progress)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getLessonsProgress,
    createLessonProgress,
    getLessonsProgressByUserId,
    getLessonsProgressByLessonId,
    getProgressByUserAndLesson
}