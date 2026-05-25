const optionService = require('../services/options.service')

const getOptions = async (req, res, next) => {
    try {
        const options = await optionService.getOptions()
        res.json(options)
    } catch (error) {
        next(error)
    }
}

const createOption = async (req, res, next) => {
    try {
        const { questionId, optionText, isCorrect } = req.body
        const option = await optionService.createOption({
            questionId,
            optionText,
            isCorrect
        })
        res.status(201).json(option)
    } catch (error) {
        next(error)
    }
}

const getOptionsByQuestionId = async (req, res, next) => {
    try {
        const { questionId } = req.params
        const options = await optionService.getOptionsByQuestionId(questionId)
        res.json(options)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getOptions,
    createOption,
    getOptionsByQuestionId
}