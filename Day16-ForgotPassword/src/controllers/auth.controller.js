const { registerService, loginService } = require("../services/auth.service")
const config = require("../config/config")
const jwt = require("jsonwebtoken")
const asyncHandler = require("../utils/asyncHandler")
const ApiResponse = require("../utils/apiResponse")

const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body
    const user = await registerService(username, email, password)
    const token = jwt.sign({ userId: user._id }, config.JWT_SECRET_KEY, { expiresIn: "1d" })

    res.cookie("token", token)

    res.json(new ApiResponse(201, "User registered successfully", {
        username: user.username,
        email: user.email,
    }))
})

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const user = await loginService(email, password)
    const token = jwt.sign({ userId: user._id }, config.JWT_SECRET_KEY, { expiresIn: "1d" })
    res.cookie("token", token)

    res.json(new ApiResponse(200, "User logged in successfully", {
        username: user.username,
        email: user.email
    }))
})


module.exports = {
    registerUser,
    loginUser
}