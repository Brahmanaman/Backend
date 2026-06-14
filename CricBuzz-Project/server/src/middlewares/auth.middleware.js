import env from "../config/env.js"
import jwt from "jsonwebtoken"
import UnAuthorized from "../shared/error/unauthorized.error.js"

export default authMiddleware = (req, res, next) => {
    try {
        const token = req.cookies.accessToken
        const decoded = jwt.verify(token, env.ACCESS_TOKEN_SECRET)
        req.user = decoded
        next()
    }
    catch (error) {
        if (error.name === "TokenExpiredError") {
            throw new UnAuthorized("Token expired", error.message)
        }
        throw new UnAuthorized("Token not found", error.message)
    }
}