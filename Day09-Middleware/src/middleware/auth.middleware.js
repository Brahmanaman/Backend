const jwt = require('jsonwebtoken');
const UserModel = require('../models/user.model');
const authMiddleware = async (req, res, next) => {
    const token = req.cookies.token
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" })
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    if (!decoded) {
        return res.status(401).json({ message: "Unauthorized" })
    }

    let user = await UserModel.findById(decoded.id)
    if (!user) {
        return res.status(401).json({ message: "Unauthorized" })
    }
    req.user = user
    next()
}

module.exports = authMiddleware;