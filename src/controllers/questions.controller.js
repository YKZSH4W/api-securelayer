const routeService = require('../services/questions.service')

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
        const { activityId, questionText, correctAnswer, explanation, type, order } = req.body
        const question = await questionService.createQuestion({
            activityId,
            questionText,
            correctAnswer,
            explanation,
            type,
            order
        })
        res.status(201).json(question)
    } catch (error) {
        next(error)
    }
}


module.exports = {
    getQuestions,
    createQuestion
}