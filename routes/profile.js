const express = require('express')
const profileRouter = express.Router()
const { getProfile, editProfile, editProfilePic } = require("../controllers/profileController")
const upload = require("../multer")
const cloudinary = require("../cloudinary")




profileRouter.get('/', getProfile )
profileRouter.post('/edit_profile', editProfile)
profileRouter.post('/edit_profile_pic', upload.array("image"), editProfilePic)

module.exports = profileRouter