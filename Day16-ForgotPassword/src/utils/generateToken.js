const jwt = require("jsonwebtoken")
const config = require("../config/config")


const generateToken = (userId) => {
    const token = jwt.sign({ userId }, config.JWT_SECRET_KEY, { expiresIn: "1d" });
    return token
}

const generateRawToken = (userId) => {
    const token = jwt.sign({ userId }, config.JWT_RAW_TOKEN, { expiresIn: "10m" });
    return token
}

module.exports = {
    generateToken,
    generateRawToken
}