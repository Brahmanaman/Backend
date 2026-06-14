import UserRepo from "../../repository/user.repository.js";
import jwt from "jsonwebtoken"
import env from "../../config/env.js"
import { app_config } from "../../constant/app.constant.js";

class AuthService {
    constructor() {
        this.userRepo = new UserRepo()
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
            picture: result.picture
        }
        const refreshToken = jwt.sign(data, env.REFRESH_TOKEN_SECRET, app_config.jwt_expires.refreshToken)
        const accessToken = jwt.sign(data, env.ACCESS_TOKEN_SECRET, app_config.jwt_expires.accessToken)

        return { accessToken, refreshToken }
    }
}

export default AuthService