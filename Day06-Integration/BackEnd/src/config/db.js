const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.ConnectionString)
        console.log("Database connected")
    }
    catch (error) {
        console.log("error while connecting database", error)
    }
}

module.exports = connectDB  