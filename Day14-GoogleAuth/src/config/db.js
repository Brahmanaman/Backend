let mongoose = require("mongoose")
const config = require("./config")

let connectDb = async () => {
    try {
        await mongoose.connect(config.MONGOOSE_URI)
        console.log("db connected")
    }
    catch (error) {
        console.log("error in connecting db ", error.message)
    }
}

module.exports = connectDb