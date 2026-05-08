const mongoose = require("mongoose")

const connectDB = async = () => {
    try {
        await mongoose.connect(process.env.MONGOOSE_URI)
        console.log("db connected")
    }
    catch (error) {
        console.log("error in connecting db ", error.message)
    }
}

module.exports = connectDB