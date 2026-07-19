import AuthService from "./auth.service.js";
import { app_config } from "../../../config/app.config.js";
import env from "../../../config/env.js"
import NotFound from "../../../shared/error/notfound.error.js";
import { jwt } from "zod";
import { buildSucessResponse } from "../../../shared/utils/buildSuccessResponse.js";
import { StatusCodes } from "http-status-codes";

class AuthController {
    constructor() {
        this.userService = new AuthService()
    }

    async googleCallback(req, res) {
        const { accessToken, refreshToken } = await this.userService.createUser(req.user)
        res.cookie("refreshToken", refreshToken, app_config.cookie.refreshToken)
        res.cookie("accessToken", accessToken, app_config.cookie.accessToken)

        res.redirect(env.REDIRECT_URL)
    }

    async refreshAccessToken(req, res) {
        const { accessToken } = await this.userService.RefreshAccessToken(req.cookies.refreshToken)

        res.cookie("accessToken", accessToken, app_config.cookie.accessToken)

        return buildSucessResponse(res)
    }

    async getMe(req, res) {
        return buildSucessResponse(res, "user verified", StatusCodes.OK, req.user)
    }
}

export default AuthController