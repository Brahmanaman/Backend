let mongoose = require("mongoose")

const dbConnect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/test")
        console.log("db connected successfully");

    }
    catch (error) {
        console.log("error while establish connection", error)
    }
}


module.exports = dbConnect;