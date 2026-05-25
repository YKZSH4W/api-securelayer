const prisma = require('../config/prisma')

const getUsersAnswers = async () => {
    return await prisma.usersAnswers.findMany()
}

const createUserAnswer = async (data) => {
    return await prisma.usersAnswers.create({
        data: {
            ...data
        }
    })
}

const getUserAnswersByAttemptId = async (attemptId) => {
    return await prisma.usersAnswers.findMany({
        where: { 
            attemptId: parseInt(attemptId) 
        }
    })
}

const getUserAnswersByQuestionId = async (questionId) => {
    return await prisma.usersAnswers.findMany({
        where: {
            questionId: parseInt(questionId)
        }
    })
}

const getUserAnswersByAttemptAndQuestion = async (attemptId, questionId) => {
    return await prisma.usersAnswers.findMany({
        where: {
            attemptId: parseInt(attemptId),
            questionId: parseInt(questionId)
        }
    })
}

module.exports = {
    getUsersAnswers,
    createUserAnswer,
    getUserAnswersByAttemptId,
    getUserAnswersByQuestionId,
    getUserAnswersByAttemptAndQuestion
}
