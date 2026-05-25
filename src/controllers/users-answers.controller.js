const userAnswerService = require('../services/users-answers.service')

const getUsersAnswers = async (req, res, next) => {
    try {
        const userAnswers = await userAnswerService.getUsersAnswers()
        res.json(userAnswers)
    } catch (error) {
        next(error)
    }
}

const createUserAnswer = async (req, res, next) => {
    try {
        const { attemptId, questionId, answer, isCorrect } = req.body
        const userAnswer = await userAnswerService.createUserAnswer({
            attemptId,
            questionId,
            answer,
            isCorrect
        })
        res.status(201).json(userAnswer)
    } catch (error) {
        next(error)
    }
}

const getUserAnswersByAttemptId = async (req, res, next) => {
    try {
        const { attemptId } = req.params
        const userAnswers = await userAnswerService.getUserAnswersByAttemptId(attemptId)
        res.json(userAnswers)
    } catch (error) {
        next(error)
    }
}

const getUserAnswersByQuestionId = async (req, res, next) => {
    try {
        const { questionId } = req.params
        const userAnswers = await userAnswerService.getUserAnswersByQuestionId(questionId)
        res.json(userAnswers)
    } catch (error) {
        next(error)
    }
}

const getUserAnswersByAttemptAndQuestion = async (req, res, next) => {
    try {
        const { attemptId, questionId } = req.params
        const userAnswers = await userAnswerService.getUserAnswersByAttemptAndQuestion(attemptId, questionId)
        res.json(userAnswers)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getUsersAnswers,
    createUserAnswer,
    getUserAnswersByAttemptId,
    getUserAnswersByQuestionId,
    getUserAnswersByAttemptAndQuestion
}