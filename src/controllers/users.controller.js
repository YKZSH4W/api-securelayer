const userService = require('../services/users.service')

const getUsers = async (req, res, next) => {
    try {
        const users = await userService.getUsers()
        res.json(users)
    } catch (error) {
        next(error)
    }
}

const registerUser = async (req, res, next) => {
    try {
        const { name, email, lastName, password } = req.body
        const { password: noPassword, lastAccessed: noLastAccessed, ...user } = await userService.registerUser({ name, email, lastName, password })
        res.status(201).json(user)
    } catch (error) {
        next(error)
    }
}

const updateUser = async (req, res, next) => {
    try {
        const { name, lastName, email, profilePicture } = req.body
        const user = await userService.updateUser(req.params.id, { name, lastName, email, profilePicture })
        res.json(user)
    } catch (error) {
        next(error)
    }
}

const updateKnowledgeLevel = async (req, res, next) => {
    try {
        const { knowledgeLevel } = req.body
        const user = await userService.updateKnowledgeLevel(req.params.id, knowledgeLevel)
        res.json(user)
    } catch (error) {
        next(error)
    }
}

const getUserByEmail = async (req, res, next) => {
    try {
        const user = await userService.getUserByEmail(req.params.email)
        res.json(user)
    } catch (error) {
        next(error)
    }
}

const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body
        const user = await userService.loginUser(email, password)
        if (!user) return res.status(401).json({ message: 'Credenciales incorrectas' })
        res.json(user)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getUsers,
    registerUser,
    updateUser,
    updateKnowledgeLevel,
    getUserByEmail,
    loginUser
}