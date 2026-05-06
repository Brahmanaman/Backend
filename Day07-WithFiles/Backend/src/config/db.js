const mongoose = require("mongoose")


let dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONN_STRING)
        console.log("connection establised successfully")
    }
    catch (error) {
        console.log("error while connecting database ", error)
    }

}

module.exports = dbConnect


