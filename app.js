require('dotenv').config()

const express = require('express')

const app = express()

// Middleware JSON
app.use(express.json())

// Rutas
const userRoutes = require('./src/routes/user.routes')

// Middleware errores
const errorMiddleware = require('./src/middlewares/error.middleware')

// Ruta base
app.get('/', (req, res) => {
  res.json({
    message: 'API funcionando 🚀'
  })
})

// Endpoints
app.use('/users', userRoutes)

// Middleware global
app.use(errorMiddleware)

module.exports = app
