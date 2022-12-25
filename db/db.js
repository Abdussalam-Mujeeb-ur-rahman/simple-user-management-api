const { MONGO_URL } = require("../config/config");
const mongoose = require("mongoose");
const logger = require("../loggers/logger");

function connectToDb() {
  mongoose
    .connect(MONGO_URL)

    mongoose.connection.on("connected", () => {
      logger.info("mongoDB connected!")
    })
    mongoose.connection.on("error", () => {
      logger.error("mongoDB error!/n" + error)
    })
}

module.exports = {connectToDb}