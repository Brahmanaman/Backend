const { registerService, loginService, forgetPasswordService, resetPasswordService, updatePasswordService } = require("../services/auth.service")
const config = require("../config/config")
const jwt = require("jsonwebtoken")
const asyncHandler = require("../utils/asyncHandler")
const ApiResponse = require("../utils/apiResponse")

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
    const user = await registerService(name, email, password)
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

const forgetPassword = asyncHandler(async (req, res) => {
    const { email } = req.body
    await forgetPasswordService(email)
    return res.json(new ApiResponse(200, "Linked sent successfully", {}))
})

const resetPassword = asyncHandler(async (req, res) => {
    const { token } = req.params
    const user = await resetPasswordService(token)
    res.render("update.ejs", { userId: user._id })
})

const updatePassword = asyncHandler(async (req, res) => {
    const { password, confirmPassword } = req.body
    if (password !== confirmPassword) {
        return res.json(new ApiResponse(400, "Password and confirm password does not match", {}))
    }
    if (!password) {
        return res.json(new ApiResponse(400, "Password is required", {}))
    }
    const { userId } = req.params
    await updatePasswordService(userId, password)
    return res.json(new ApiResponse(200, "Password updated successfully", {}))
})
module.exports = {
    registerUser,
    loginUser,
    forgetPassword,
    resetPassword,
    updatePassword
}