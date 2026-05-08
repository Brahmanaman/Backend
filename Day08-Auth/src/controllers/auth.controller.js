const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')

async function registerUser(req, res) {
    const { username, email, password } = req.body


    const isUserAlreadyExists = await userModel.findOne({ email })
    if (isUserAlreadyExists) {
        res.status(409).json({
            message: "user already exists with this email"
        })

    }

    try {
        const user = await userModel.create({
            username,
            email,
            password
        })

        const token = jwt.sign({
            id: user._id
        }, process.env.JWT_SECRET)

        res.cookie('token', token)

        return res.status(201).json({
            message: "user created successfully",
            user
        })
    }
    catch (error) {
        return res.status(500).json({
            message: "internal server error"
        })
    }
}

module.exports = {
    registerUser
}