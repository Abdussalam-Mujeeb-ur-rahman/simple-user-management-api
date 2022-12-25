const userModel = require("../model/userModel")
const path = require('path')
const logger = require("../loggers/logger")


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

function editProfilePic(req, res){
    try {
        // const imagePath = path.join(__dirname, `../${req.file.destination}/${req.file.filename}`)
        // console.log(imagePath)
        console.log(req.file)
        const file = req.file.filename
        console.log(typeof file)


        res.send("file updated successfully!")
    } catch (error) {
        
    }
}

module.exports = {
    getProfile,
    editProfile,
    editProfilePic
}