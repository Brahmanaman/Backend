const mongoose = require("mongoose")

let dbConnect = async () => {
    try {
        await mongoose.connect("mongodb+srv://aman:aman123@test-cluster.gykfeeq.mongodb.net/")
        console.log("db connected successfully");
    }
    catch (error) {
        console.log("error while establish connection", error)
    }
}

module.exports = dbConnect
