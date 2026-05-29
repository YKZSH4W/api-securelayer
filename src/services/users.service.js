const prisma = require('../config/prisma')
const bcrypt = require('bcrypt')

const SALT_ROUNDS = 10

const getUsers = async () => {
    return await prisma.users.findMany()
}

const registerUser = async (data) => {
    const hashedPassword = await bcrypt.hash(data.password, SALT_ROUNDS)
    const [month, day, year] = data.birthDate.split('/')

    return await prisma.users.create({
        data: {
            ...data,
            password: hashedPassword,
            birthDate: new Date(`${year}-${month}-${day}`),
            lastAccessed: new Date(),
            totalXp: 0,
            streak: 0,
            knowledgeLevel: "Sin clasificar"
        }
    })
}

const getUserByEmail = async (email) => {
    return await prisma.users.findUnique({
        where: { email }
    })
}

const getUserByUsername = async (username) => {
    return await prisma.users.findUnique({
        where: { username }
    })
}

const loginUser = async (email, password) => {
    const user = await getUserByEmail(email)
    if (!user) return null

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) return null

    const { password: noPass, lastAccessed: noAccessed, ...userWithoutPasswordAndAccessed } = user
    return userWithoutPasswordAndAccessed
}

module.exports = {
    getUsers,
    registerUser,
    getUserByEmail,
    getUserByUsername,
    loginUser
}
