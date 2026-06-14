import mongoose from "mongoose"
import env from "../config/env.js"
import logger from "../config/logger.js"

const connectDb = async () => {
    try {
        await mongoose.connect(env.MONGO_URL)
        logger.info("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
}

export default connectDb