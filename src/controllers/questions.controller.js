const questionService = require('../services/questions.service')

const getQuestions = async (req, res, next) => {
    try {
        const questions = await questionService.getQuestions()
        res.json(questions)
    } catch (error) {
        next(error)
    }
}

const createQuestion = async (req, res, next) => {
    try {
        const { activityId, questionText, explanation, type, questionOrder } = req.body
        const question = await questionService.createQuestion({
            activityId,
            questionText,
            explanation,
            type,
            questionOrder
        })
        res.status(201).json(question)
    } catch (error) {
        next(error)
    }
}

const getQuestionsByActivityId = async (req, res, next) => {
    try {
        const { activityId } = req.params
        const questions = await questionService.getQuestionsByActivityId(activityId)
        res.json(questions)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getQuestions,
    createQuestion,
    getQuestionsByActivityId
}