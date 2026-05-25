const mongoose = require("mongoose");
const config = require("./config");


const connectDb = async () => {
    try {
        await mongoose.connect(config.MONGO_URI);
        console.log("db connected")
    }
    catch (error) {
        console.log("error in connecting db ", error.message)
        process.exit(1);
    }
}

module.exports = connectDb