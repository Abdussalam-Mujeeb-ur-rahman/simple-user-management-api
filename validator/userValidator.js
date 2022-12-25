
const joi = require('joi')

const userValidator = joi.object({
    first_name: joi.string().required(),
    last_name: joi.string().required(),
    dob: joi.date().greater('1-1-1990').less('now'),
    email: joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    password: joi.string().required().min(6).max(20),
    confirm_password: joi.ref('password')

})

async function validateUserMiddleware(req, res, next)
{
    const userPayload = req.body
    try {
        await userValidator.validateAsync(userPayload)
        next()
    } catch (error) {
        console.log(`error from joi ${error}`)
    }
}

module.exports = validateUserMiddleware