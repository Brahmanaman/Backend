const userModel = require("../models/user.model")
const bcrypt = require("bcrypt")
const generateToken = require("../utils/generateToken")
const ApiError = require("../utils/ApiError")


const registerService = async = (username, email, password) => {
    const userExist = await userModel.findOne({ email })
    if (userExist) {
        throw new ApiError(409, "User already exist with this email")
    }

    const hashedPassword = bcrypt.hashSync(password, 10)
    const user = await useModel.Create({
        username,
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


module.exports = {
    registerService,
    loginService
}