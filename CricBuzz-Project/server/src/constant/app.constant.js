export default {
    PORT: 3000,
    MONGO_URL: "mongodb://localhost:27017/cricbuzz",
    LOGGER_LEVEL: "info",
    NODE_ENV: "development",
    RATE_LIMITWINDOWMS: 15 * 60 * 1000,
    RATE_LIMITMAX: 100
}

export const app_config = {
    jwt_expires: {
        accessToken: 1 * 60 * 60 * 1000,
        refreshToken: 30 * 24 * 60 * 60 * 1000
    },
    cookie: {
        accessToken: {
            httponly: true,
            sameSite: "lax",
            secure: true,
            maxAge: 1 * 60 * 60 * 1000
        },
        refreshToken: {
            httponly: true,
            sameSite: "lax",
            secure: true,
            maxAge: 30 * 24 * 60 * 60 * 1000
        }
    }
}