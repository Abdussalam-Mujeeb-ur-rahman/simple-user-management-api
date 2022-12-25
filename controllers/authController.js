const bcrypt = require("bcrypt");
const logger = require("../loggers/logger");
const userModel = require("../model/userModel");

async function signup(req, res) {
  const { first_name, last_name, dob, email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    //user exist
    if (user) {
      return res.end("User exists. try using another email!");
    }
    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    //create user
    try {
      const newUser = await userModel.create({
        first_name,
        last_name,
        dob,
        email,
        password: hashedPassword,
      });

      //create session
      const session = req.session;
      session.userid = email;

      logger.info("user created");
      res.json({
        name: newUser.first_name + " " + newUser.last_name,
        dob: newUser.dob,
        email: newUser.email,
        profile_pic: newUser.profile_pic,
        createdAt: newUser.createdAt
      });
    } catch (error) {
      logger.error(`error adding new user ${error} ${req.path}`);
      res.send("error creating account, please try again!");
    }
  } catch (error) {
    logger.error(`error from signup!`);
    res
      .status(500)
      .send(`error signing up ,please check your network connection!`);
  }
}

async function login(req, res) {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    // user exists
    if (!user) {
      return res.end("user not found!. Please, try signing up");
    }
    try {
      // validate password
      const validate = await bcrypt.compare(password, user.password);
      if (!validate) {
        return res.send("email or password not correct!");
      }
    } catch (error) {
      logger.error(`error from validating ${error}`);
    }
    //create session
    const session = req.session;
    session.userid = email;

    res.status(200);
    res.json({
      name: user.first_name + " " + user.last_name,
      dob: user.dob,
      email: user.email,
      profile_pic: user.profile_pic,
      createdAt: user.createdAt
    });
  } catch (error) {
    logger.error(`error logging in ${error}`);
    res.end("error logging in!. Please try again");
  }
}

module.exports = {
  signup,
  login,
};
