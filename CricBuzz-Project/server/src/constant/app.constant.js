import env from "../config/env.js";
export default {
    PORT: 8000,
    MONGO_URL: "mongodb://localhost:27017/cricbuzz",
    LOGGER_LEVEL: "info",
    NODE_ENV: "development",
    RATE_LIMITWINDOWMS: 15 * 60 * 1000,
    RATE_LIMITMAX: 100
}
