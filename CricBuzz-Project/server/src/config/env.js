import dotenv from "dotenv"
dotenv.config();
import z from "zod"
import logger from "./logger.js"
import constant from "../constant/app.constant.js"


const envSchema = z.object({
    PORT: z.coerce.number().default(constant.PORT),
    MONGO_URL: z.string().default(constant.MONGO_URL),
    NODE_ENV: z.enum(["development", "test", "production"]).default(constant.NODE_ENV),
    LOGGER_LEVEL: z.enum(["info", "warn", "error", "fatal"]).default(constant.LOGGER_LEVEL),
    CORS_ORIGIN: z.string(),
    RATE_LIMITWINDOWMS: z.coerce.number().default(constant.RATE_LIMITWINDOWMS),
    RATE_LIMITMAX: z.coerce.number().default(constant.RATE_LIMITMAX),
    GOOGLE_CLIENT_ID: z.string(),
    GOOGLE_CLIENT_SECRET: z.string(),
    GOOGLE_CALLBACK_URL: z.string(),
    REFRESH_TOKEN_SECRET: z.string(),
    ACCESS_TOKEN_SECRET: z.string(),
    REDIRECT_URL: z.string(),
})

const parsed = envSchema.safeParse(process.env)
if (!parsed.success) {
    logger.error(parsed.error.format());
    process.exit(1);
}

export default parsed.data;