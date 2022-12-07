const jwt = require('jsonwebtoken')
const bcyrpt = require('bcryptjs')

const createToken = (payload) => {
    return jwt.sign(payload, process.env.SECRET)
}

const signToken = (token) => {
    return jwt.verify(token, process.env.SECRET)
}

const hashPassword = (password) => {
    return bcyrpt.hashSync(password, 8)
}

const comparePassword = (password, hash) => {
    return bcyrpt.compareSync(password, hash)
} 

module.exports = {createToken, signToken, hashPassword, comparePassword}