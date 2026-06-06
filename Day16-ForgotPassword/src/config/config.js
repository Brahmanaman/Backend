require("dotenv").config()


if (!process.env.MONGOOSE_URI) {
    throw new Error("MONGOOSE_URI is not defined in environment variables")
}

if (!process.env.JWT_SECRET_KEY) {
    throw new Error("JWT_SECRET_KEY is not defined in environment variables")
}


module.exports = {
    MONGOOSE_URI: process.env.MONGOOSE_URI,
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY  
}