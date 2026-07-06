import AuthService from "./auth.service.js";
import { app_config } from "../../constant/app.constant.js";
import env from "../../config/env.js"

class AuthController {
    constructor() {
        this.userService = new AuthService()
    }

    async googleCallback(req, res) {
        const { accessToken, refreshToken } = await this.userService.createUser(req.user)
        console.log(accessToken)
        console.log(refreshToken)
        res.cookie("refreshToken", refreshToken, app_config.cookie.refreshToken)
        res.cookie("accessToken", accessToken, app_config.cookie.accessToken)
        res.json({
            data: req.user
        })

        // res.redirect(env.REDIRECT_URL)
    }

}

export default AuthController