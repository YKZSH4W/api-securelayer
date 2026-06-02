const prisma = require('../config/prisma')
const bcrypt = require('bcrypt')

const SALT_ROUNDS = 10

const getUsers = async () => {
    return await prisma.users.findMany()
}

const registerUser = async (data) => {
    const hashedPassword = await bcrypt.hash(data.password, SALT_ROUNDS)

    const newUser = await prisma.users.create({
        data: {
            ...data,
            password: hashedPassword,
            lastAccessed: new Date(),
            totalXp: 0,
            streak: 0,
            knowledgeLevel: "Sin clasificar"
        }
    })

    await prisma.enrolls.create({
        data: {
            userId: newUser.id,
            routeId: 1,
            isCompleted: false,
            enrollmentDate: new Date(),
            finishDate: null
        }
    })

    return newUser
}

// Actualiza nombre, correo y/o foto de perfil del usuario.
// Si el correo ya existe en otro usuario, Prisma lanza P2002 → el middleware responde 409.
const updateUser = async (id, data) => {
    const updated = await prisma.users.update({
        where: { id: parseInt(id) },
        data: {
            name: data.name,
            lastName: data.lastName,
            email: data.email,
            profilePicture: data.profilePicture
        }
    })

    const { password, lastAccessed, ...rest } = updated
    return rest
}

const getUserByEmail = async (email) => {
    return await prisma.users.findUnique({
        where: { email }
    })
}

const loginUser = async (email, password) => {
    const user = await getUserByEmail(email)
    if (!user) return null

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) return null

    // --- Cálculo de la racha (días seguidos iniciando sesión) ---
    const now = new Date()
    const last = user.lastAccessed ? new Date(user.lastAccessed) : null

    // Normaliza una fecha a medianoche para comparar por día calendario
    const startOfDay = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate())

    let newStreak = user.streak ?? 0

    if (!last) {
        // Primer acceso registrado
        newStreak = 1
    } else {
        const diffDays = Math.round(
            (startOfDay(now) - startOfDay(last)) / (1000 * 60 * 60 * 24)
        )

        if (diffDays === 0) {
            // Ya entró hoy: la racha no cambia (mínimo 1)
            newStreak = newStreak > 0 ? newStreak : 1
        } else if (diffDays === 1) {
            // Entró ayer: día consecutivo → suma 1
            newStreak = newStreak + 1
        } else {
            // Se saltó uno o más días: la racha se reinicia
            newStreak = 1
        }
    }

    // Actualiza la fecha de último acceso y la racha en cada inicio de sesión
    const updatedUser = await prisma.users.update({
        where: { id: user.id },
        data: { lastAccessed: now, streak: newStreak }
    })

    const { password: noPass, lastAccessed: noAccessed, ...userWithoutPasswordAndAccessed } = updatedUser
    return userWithoutPasswordAndAccessed
}

module.exports = {
    getUsers,
    registerUser,
    updateUser,
    getUserByEmail,
    loginUser
}
