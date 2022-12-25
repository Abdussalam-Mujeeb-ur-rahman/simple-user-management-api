
function auth(req, res, next){
    const session = req.session;
    const sessionUserID = session.userid
    if(!sessionUserID){
        return res.end("You are not logged in!")
    }


    next()
}

module.exports = auth