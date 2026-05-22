const userService = require('../services/user.service')

const getUsers = async (req, res, next) => {
    try {
        const users = await userService.getUsers()
        res.json(users)
    } catch (error) {
        next(error)
    }
}

const createUser = async (req, res, next) => {
    try {
        const { name, email, lastName, password, birthDate, username, totalXp, streak } = req.body
        const user = await userService.createUser({
            name,
            email,
            lastName,
            password,
            birthDate,
            username,
            totalXp,
            streak
        })
        
        res.status(201).json(user)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getUsers,
    createUser
}