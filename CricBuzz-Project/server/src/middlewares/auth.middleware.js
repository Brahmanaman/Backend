import env from "../config/env.js"
import jwt from "jsonwebtoken"
import UnAuthorized from "../shared/error/unauthorized.error.js"

export const authMiddleware = (req, res, next) => {
    try {
        const token = req.cookies.accessToken
        const decoded = jwt.verify(token, env.ACCESS_TOKEN_SECRET)
        req.user = decoded
        next()
    }
    catch (error) {
        throw new UnAuthorized("Access Token expired")
    }
}

export const authorizationMiddleware = (...roles) => {
    return (req, res, next) => {
        if (!req.user) {
            return next(new UnAuthorized("Please login first"))
        }
        if (!roles.includes(req.user.role)) {
            return next(new UnAuthorized("Invalid role"))
        }
        next()
    }
}
