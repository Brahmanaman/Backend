const mongoose = require("mongoose")
const config = require("./config")


const connectDb = async () => {
    try {
        await mongoose.connect(config.MONGOOSE_URI)
        console.log("db connected")
    }
    catch (error) {
        throw new Error("error in connecting db ", error.message)
    }
}

module.exports = connectDb