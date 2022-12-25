const logger = require("../loggers/logger");
const userModel = require("../model/userModel")

async function deleteUser(req, res){
     try {
        const session = req.session;
        const email = session.userid

        try {
            const user = await userModel.findOne({email})  
            try {
                await userModel.deleteOne(user);
                session.destroy()
                res.end('deletion successful!')
                logger.info('deletion successful')
            } catch (error) {
                logger.error('error deleting after finding ' + error)
            }          
        } catch (error) {
            logger.error(`error finding user, ${error}, ${req.path}`)
        }
     } catch (error) {
        logger.error(`error deleting user ${error}`)
        res.end('error deleting user')
     }
}

module.exports = {
    deleteUser
}