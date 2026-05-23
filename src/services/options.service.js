const prisma = require('../config/prisma')

const getOptions = async () => {
    return await prisma.options.findMany()
}

const createOption = async (data) => {
    return await prisma.options.create({
        data: {
            ...data
        }
    })
}

const getOptionsByQuestionId = async (questionId) => {
    return await prisma.options.findMany({
        where: {
            questionId: parseInt(questionId)
        }
    })
}

module.exports = {
    getOptions,
    createOption,
    getOptionsByQuestionId
}