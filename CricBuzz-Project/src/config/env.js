import dotenv from "dotenv"
dotenv.config();
import z from "zod"
import logger from "./logger.js"
import constant from "../constant/app.constant.js"


const envSchema = z.object({
    PORT: z.coerce.number().default(constant.PORT),
    MONGO_URL: z.string().default(constant.MONGO_URL),
    NODE_ENV: z.enum(["development", "test", "production"]).default(constant.NODE_ENV),
    LOGGER_LEVEL: z.enum(["info", "warn", "error", "fatal"]).default(constant.LOGGER_LEVEL)
})

const parsed = envSchema.safeParse(process.env)
if (!parsed.success) {
    logger.error("check your env's ")
}

export default parsed.data;