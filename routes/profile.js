const express = require('express')
const profileRouter = express.Router()
const { getProfile, editProfile, editProfilePic } = require("../controllers/profileController")
const multer = require("multer")
const path = require("path")
const imagePath = path.join(__dirname,'imageFolder')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, imagePath)
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage })




profileRouter.get('/', getProfile )
profileRouter.post('/edit_profile', editProfile)
profileRouter.post('/edit_profile_pic', upload.single("image"), editProfilePic)

module.exports = profileRouter