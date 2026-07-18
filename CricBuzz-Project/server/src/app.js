import express from "express";
import env from "./config/env.js"
import { securityMiddleware } from "./middlewares/security.middleware.js";
import morgan from "morgan"
import googleAuthMiddleware from "./middlewares/googleOAuth.middleware.js";
import authRouter from "./modules/public/auth/auth.route.js";
import ErrorHandler from "./middlewares/errorHandler.middleware.js";
import NotFound from "./shared/error/notfound.error.js";

function createApp() {
    const app = express()

    if (env.NODE_ENV === "development") {
        app.use(morgan("dev"))
    }
    securityMiddleware(app)
    googleAuthMiddleware(app)
    app.use("/api/auth", authRouter)


    app.use(NotFound)
    app.use(ErrorHandler)
    return app
}

export default createApp