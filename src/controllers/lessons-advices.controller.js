const lessonAdviceService = require('../services/lessons-advices.service')

const getLessonsAdvices = async (req, res, next) => {
    try {
        const routes = await lessonAdviceService.getLessonsAdvices()
        res.json(routes)
    } catch (error) {
        next(error)
    }
}

const createLessonAdvice = async (req, res, next) => {
    try {
        const { lessonId, type, adviceTitle, adviceText } = req.body
        const lesson = await lessonAdviceService.createLessonAdvice({
            lessonId,
            type,
            adviceTitle,
            adviceText
        })
        res.status(201).json(lesson)
    } catch (error) {
        next(error)
    }
}

const getLessonsAdvicesById = async (req, res, next) => {
    try {
        const { id } = req.params
        const lesson = await lessonAdviceService.getLessonsAdvicesById(id)
        res.json(lesson)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getLessonsAdvices,
    createLessonAdvice,
    getLessonsAdvicesById
}