const jwt = require("jsonwebtoken")
const config = require("../config/config")


const generateToken = (userId) => {
    const token = jwt.sign({ userId }, config.JWT_SECRET_KEY, { expiresIn: "1d" });
    return token
}

module.exports = generateToken