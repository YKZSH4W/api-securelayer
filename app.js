require('dotenv').config()

const express = require('express')

const app = express()

// Middleware JSON
app.use(express.json())

// Rutas
const userRoutes = require('./src/routes/users.routes')
const routeRoutes = require('./src/routes/routes.routes')
const lessonRoutes = require('./src/routes/lessons.routes')
const activityRoutes = require('./src/routes/activities.routes')
const questionRoutes = require('./src/routes/questions.routes')
const optionRoutes = require('./src/routes/options.routes')
const enrollRoutes = require('./src/routes/enrolls.routes')
const achievementRoutes = require('./src/routes/achievements.routes')
const userAchievementRoutes = require('./src/routes/users-achievements.routes')
const routeAdviceRoutes = require('./src/routes/routes-advices.routes')
const lessonAdviceRoutes = require('./src/routes/lessons-advices.routes')
const lessonsProgressRoutes = require('./src/routes/lessons-progress.routes')
const phishingSimulationsRoutes = require('./src/routes/phishing-simulations.routes')
const attemptsRoutes = require('./src/routes/attempts.routes')
const activitiesProgressRoutes = require('./src/routes/activities-progress.routes')
const usersAnswersRoutes = require('./src/routes/users-answers.routes')

// Middleware errores
const errorMiddleware = require('./src/middlewares/error.middleware')

// Ruta base
app.get('/', (req, res) => {
  res.json({
    message: 'API funcionando!'
  })
})

// Endpoints
app.use('/users', userRoutes)
app.use('/activities', activityRoutes)
app.use('/routes', routeRoutes)
app.use('/lessons', lessonRoutes)
app.use('/questions', questionRoutes)
app.use('/options', optionRoutes)
app.use('/enrolls', enrollRoutes)
app.use('/achievements', achievementRoutes)
app.use('/users-achievements', userAchievementRoutes)
app.use('/routes-advices', routeAdviceRoutes)
app.use('/lessons-advices', lessonAdviceRoutes)
app.use('/lessons-progress', lessonsProgressRoutes)
app.use('/phishing-simulations', phishingSimulationsRoutes)
app.use('/attempts', attemptsRoutes)
app.use('/activities-progress', activitiesProgressRoutes)
app.use('/users-answers', usersAnswersRoutes)

// Middleware global
app.use(errorMiddleware)

module.exports = app