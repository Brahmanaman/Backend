require("dotenv").config()


if (!process.env.MONGOOSE_URI) {
    throw new Error("MONGOOSE_URI is not defined in environment variables")
}

if (!process.env.JWT_SECRET_KEY) {
    throw new Error("JWT_SECRET_KEY is not defined in environment variables")
}

if (!process.env.JWT_RAW_TOKEN) {
    throw new Error("JWT_RAW_TOKEN is not defined in environment variables")
}

if (!process.env.SMTP_USER) {
    throw new Error("SMTP_USER is not defined in environment variables")
}

if (!process.env.SMTP_PASS) {
    throw new Error("SMTP_PASS is not defined in environment variables")
}

module.exports = {
    MONGOOSE_URI: process.env.MONGOOSE_URI,
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
    JWT_RAW_TOKEN: process.env.JWT_RAW_TOKEN,
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASS: process.env.SMTP_PASS
}