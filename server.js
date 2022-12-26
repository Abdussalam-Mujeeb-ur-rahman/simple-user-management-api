const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { PORT, SESSION_SECRET } = require("./config/config");
const { connectToDb } = require("./db/db")
const session = require('express-session')
const authRouter = require("./routes/auth")
const profileRouter = require("./routes/profile")
const userRouter = require("./routes/user")
const cookieParser = require("cookie-parser")
const auth = require("./auth/auth")
const httpLogger = require('./loggers/httpLogger')
const logger = require('./loggers/logger')
const helmet = require("helmet")

const { rateLimit } = require('express-rate-limit')
const limiter = rateLimit({
  windowMS: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false
})

const port = PORT || 3030;
const app = express();

app.use(helmet())
connectToDb()

app.use(httpLogger)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cookieParser())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 100 }
}))
app.use(limiter)

app.get('/', (req, res) => {
    try {
        res.status(200).send('Welcome to simple-user-management-api created by Abdussalam on the authority of Technify Incubator')
    } catch (error) {
        res.status(500)
        res.json({error})
    }
})

app.use('/auth', authRouter)
app.use('/profile', auth, profileRouter)
app.use('/user', auth, userRouter)

app.use((error, req, res, next) => {
  logger.error("Error handling middleware called");
  logger.info(`path: ${req.path}`);
  logger.error(`error: ${error}`);
  next();
});

app.listen(port, () => {
 logger.info("server is running!");
});
