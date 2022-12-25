const mongoose = require('mongoose')
// const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    dob: {
        type: Date,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        minLength: [8,'Password should be minimum of 8 characters'],
        required: true
    },
    profile_pic: {
        type: String,
        default: ""
    }
}, { timestamps: true })

// userSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('users', userSchema)