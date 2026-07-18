import UserRepo from "../../../repository/user.repository.js";
import jwt from "jsonwebtoken"
import env from "../../../config/env.js"
import { app_config } from "../../../config/app.config.js";

class AuthService {
    constructor() {
        this.userRepo = new UserRepo()
    }

    async RefreshAccessToken(refreshToken) {
        if (!refreshToken) {
            throw new NotFound("refresh token not found")
        }
        const payload = jwt.verify(refreshToken, env.REFRESH_TOKEN_SECRET)
        const { iat, exp, ...newPayload } = payload;
        const accessToken = jwt.sign(newPayload, env.ACCESS_TOKEN_SECRET, { expiresIn: app_config.jwt_expires.accessToken })
        return { accessToken }
    }

    async createUser(user) {
        const userExists = await this.userRepo.findByEmail(user.emails[0].value)
        let result = userExists

        if (!userExists) {
            const _user = await this.userRepo.create({ email: user.emails[0].value, name: user.name.givenName, picture: user.photos[0].value });
            result = _user
        }

        let data = {
            id: result._id,
            email: result.email,
            name: result.name,
            picture: result.picture,
            role: result.role
        }
        const refreshToken = jwt.sign(data, env.REFRESH_TOKEN_SECRET, { expiresIn: app_config.jwt_expires.refreshToken })
        const accessToken = jwt.sign(data, env.ACCESS_TOKEN_SECRET, { expiresIn: app_config.jwt_expires.accessToken })

        return { accessToken, refreshToken }
    }
}

export default AuthService