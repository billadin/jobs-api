const User = require('../models/User');
const {StatusCodes} = require('http-status-codes')


const register = async (req, res) => {

    const user = await User.create({...req.body})
    const token = user.createJwt()
    res.status(StatusCodes.CREATED).json({ name: user.name, token})
}


const login = async (req, res) => {
    res.send('Login user')
}

module.exports = { register, login}