import hpp from "hpp"
import cors from "cors"
import cookieParser from "cookie-parser"
import rateLimit from "express-rate-limit"
import helmet from "helmet"
import compression from "compression";
import env from "../config/env.js"
import express from "express"

export const securityMiddleware = (app) => {
    //ekk particular ip se 15 min m maximum 100 request ayi varna toh block kardo
    app.use(rateLimit({
        windowMs: env.RATE_LIMITWINDOWMS,
        legacyHeaders: true,
        max: env.RATE_LIMITMAX,
        message: "Too many requests from this IP, please try again after 15 minutes"
    }))
    app.use(compression()) //compress data 
    app.use(cookieParser()) //allow cookies
    app.use(helmet()) //security headers
    app.use(cors({
        origin: env.CORS_ORIGIN.split(",").map((url) => url.trim()),
        credentials: true
    }))
    app.use(hpp()) //prevent duplicate params

    app.use(express.json({ limit: "3mb" })) //allow json data
    app.use(express.urlencoded({ limit: "3mb" })) //allow form data 
}