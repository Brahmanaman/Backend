const userModel = require("../models/user.model")
const bcrypt = require("bcrypt")
const { generateToken, generateRawToken } = require("../utils/generateToken")
const ApiError = require("../utils/ApiError")
const sendMail = require("./mail.service")
const jwt = require("jsonwebtoken")
const config = require("../config/config")


const registerService = async (name, email, password) => {
    const userExist = await userModel.findOne({ email })
    if (userExist) {
        throw new ApiError(409, "User already exist with this email")
    }

    const hashedPassword = bcrypt.hashSync(password, 10)
    const user = await userModel.create({
        name,
        email,
        password: hashedPassword
    })

    return user
}

const loginService = async (email, password) => {
    const user = await userModel.findOne({ email })
    if (!user) {
        throw new ApiError(401, "Invalid credentials")
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password)

    if (!isPasswordMatch) {
        throw new ApiError(401, "Invalid credentials")
    }
    return user;
}

const forgetPasswordService = async (email) => {
    if (!email) {
        throw new ApiError(400, "Email is required")
    }
    let user = await userModel.findOne({ email })
    if (!user) {
        throw new ApiError(404, "User not found")
    }
    let rawToken = generateRawToken(user._id);
    let resetLink = `http://localhost:3000/api/auth/reset-password/${rawToken}`

    await sendMail(user.email, "Password Reset", `<a href="${resetLink}">Reset Password</a>`)
}

const resetPasswordService = async (token) => {
    if (!token) {
        throw new Error("Token is required")
    }
    let decoded = jwt.verify(token, config.JWT_RAW_TOKEN)
    let user = await userModel.findById(decoded.userId)
    if (!user) {
        throw new Error("User not found")
    }
    return user
}

const updatePasswordService = async (userId, password) => {
    const hashedPassword = bcrypt.hashSync(password, 10)
    let result = await userModel.findByIdAndUpdate(userId, { password: hashedPassword }, { new: true })
    console.log(result)
}

module.exports = {
    registerService,
    loginService,
    forgetPasswordService,
    resetPasswordService,
    updatePasswordService
}