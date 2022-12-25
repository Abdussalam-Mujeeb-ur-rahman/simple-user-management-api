
const express = require('express')
const validateUserMiddleware = require('../validator/userValidator')
const authRouter = express.Router()
const { signup, login } = require('../controllers/authController')

authRouter.post('/signup',  validateUserMiddleware, signup)
authRouter.post('/login', login)

module.exports = authRouter