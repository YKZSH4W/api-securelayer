const prisma = require('../config/prisma')

const getQuestions = async () => {
    return await prisma.questions.findMany()
}

const createQuestion = async (data) => {
    return await prisma.questions.create({
        data: {
            ...data
        }
    })
}

module.exports = {
    getQuestions,
    createQuestion
}