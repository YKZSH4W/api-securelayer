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

const getQuestionsByActivityId = async (activityId) => {
    return await prisma.questions.findMany({
        where: { 
            activityId: parseInt(activityId) 
        },
        orderBy: { 
            order: 'asc' 
        },
        include: { 
            options: true 
        }
    })
}

module.exports = {
    getQuestions,
    createQuestion,
    getQuestionsByActivityId
}