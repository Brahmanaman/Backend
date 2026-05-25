require("dotenv").config();

if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not defined in environment variables")
}

if (!process.env.IMAGEKIT_PRIVATE_KEY) {
    throw new Error("IMAGEKIT_PRIVATE_KEY is not defined in environment variables")
}


const config = {
    MONGO_URI: process.env.MONGO_URI,
    IMAGEKIT_KEY: process.env.IMAGEKIT_PRIVATE_KEY
}

module.exports = config