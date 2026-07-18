import env from "../config/env.js"

export const app_config = {
    jwt_expires: {
        accessToken: env.NODE_ENV == "production" ? "1h" : "15s",
        refreshToken: env.NODE_ENV == "production" ? "30d" : "1h"
    },
    cookie: {
        accessToken: {
            httpOnly: false, //isko false rkhne ka reason ye hai ki kbhi kbhi hum chyate hai direct react se cookie mai se accesstoken access kr le 
            secure: env.NODE_ENV == "production",
            sameSite: "lax",
            maxAge: env.NODE_ENV == "production" ? 1 * 60 * 60 * 1000 : 15 * 1000
        },
        refreshToken: {
            httpOnly: true,
            secure: env.NODE_ENV == "production",
            sameSite: "lax",
            maxAge: env.NODE_ENV == "production" ? 30 * 24 * 60 * 60 * 1000 : 1 * 60 * 60 * 1000
        }
    }
}