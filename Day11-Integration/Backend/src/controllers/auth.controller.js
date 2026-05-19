const bcrypt = require('bcrypt');
const UserModel = require('../models/user.model');


let registerController = async (req, res) => {
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" })
        }

        let isUserExist = await UserModel.findOne({ email })
        if (isUserExist) {
            return res.status(409).json({ message: "User already exists" })
        }
        let user = await UserModel.create({ name, email, password })
        let token = user.generateJWT()
        res.cookie("token", token, { httpOnly: true, secure: true, sameSite: "strict", maxAge: 3600000 })
        return res.status(201).json({
            user: {
                name,
                email
            }, message: "User registered successfully"
        })
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}

let loginController = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" })
        }

        let isUserExist = await UserModel.findOne({ email })
        if (!isUserExist) {
            return res.status(404).json({ message: "user not found" })
        }

        if (!isUserExist.comparePassword(password)) {
            return res.status(401).json({ message: "Invalid credentials" })
        }

        let token = isUserExist.generateJWT()
        res.cookie("token", token, { httpOnly: true, secure: true, sameSite: "strict", maxAge: 3600000 })
        return res.status(201).json({
            user: {
                name: isUserExist.name,
                email: isUserExist.email
            }, message: "User logged in successfully"
        })
    }
    catch (err) {
        res.status(500).json({ message: "Internal Server Error" })
    }
}

module.exports = {
    registerController,
    loginController
}