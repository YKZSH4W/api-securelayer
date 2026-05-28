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
        const { activityId, questionText, correctAnswer, explanation, type, order, support } = req.body
        const question = await questionService.createQuestion({
            activityId,
            questionText,
            correctAnswer,
            explanation,
            type,
            order,
            support
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