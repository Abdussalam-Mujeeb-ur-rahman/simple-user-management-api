const express = require('express')
const userRouter = express.Router()
const { deleteUser } = require("../controllers/userController")

userRouter.delete('/', deleteUser)

module.exports = userRouter