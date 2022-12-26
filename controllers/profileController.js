const userModel = require("../model/userModel")
const path = require('path')
const logger = require("../loggers/logger")
const cloudinary = require("../cloudinary")
const fs = require("fs")
const { url } = require("inspector")

function getProfile(req, res){
    try {
        
        res.end('welcome to profile!')
    } catch (error) {
        res.end('error getting profile, please try again!')
        logger.error('error getting profile, please try again!')
    }
}

async function editProfile(req, res){
    try {
        const session = req.session;
        const email = session.userid

        try {
            const user = await userModel.findOne({email})
            const userID = user.id
            var userUpdate;

            const { first_name, last_name, dob } = req.body
            if(first_name){
              userUpdate =  await userModel.findByIdAndUpdate(userID, { first_name: first_name },{new: true})
            }
            if(last_name){
                userUpdate =  await userModel.findByIdAndUpdate(userID, { last_name: last_name },{new: true})
            }
            if(dob){
                userUpdate =  await userModel.findByIdAndUpdate(userID, { dob: dob },{new: true})
            }

            res.status(200)
            res.json({
                name: userUpdate.first_name + " " + userUpdate.last_name,
                dob: userUpdate.dob,
                email: userUpdate.email,
                profile_pic: userUpdate.profile_pic,
                createdAt: userUpdate.createdAt
              });
        } catch (error) {
            logger.error(`mongoDB error from profile, ${req.path}: ${error}`)
        }
        
    } catch (error) {
        res.end('error editing profile')
        logger.error('error editing profile')
    }
}

async function editProfilePic(req, res){
    try {
        const session = req.session;
        const email = session.userid
        const uploader = async (path) => await cloudinary.uploads(path, 'Images')

            var urls = []
            const files = req.files
            // console.log(files)
            for(const file of files){
                const {path} = file

                var newPath = await uploader(path)

                urls.push(newPath)
                fs.unlinkSync(path)
                

            }
            try {
                const user = await userModel.findOne({email})
                const userID = user.id

                var updateUser = await userModel.findByIdAndUpdate(userID, { profile_pic: newPath.url }, { new: true })
            } catch (error) {
                logger.error(' update user not successful! ' + error)
            }


            res.status(200).json({
                message: "images uploaded successfully!",
                user: {
                    name: updateUser.first_name + " " + updateUser.last_name,
                    dob: updateUser.dob,
                    email: updateUser.email,
                    profile_pic: updateUser.profile_pic,
                    createdAt: updateUser.createdAt
                }
            })


    } catch (error) {
        logger.error(error)
        res.status(500).send('please check your connection!, try again later! ' + error)
    }
}

module.exports = {
    getProfile,
    editProfile,
    editProfilePic
}