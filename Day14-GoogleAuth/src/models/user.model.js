const mongoose = require("mongoose")
const bCrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String
    },
    provider: {
        type: String,
        enum: ["google", "facebook"],
    },
    provider_id: {
        type: String,
    }
}, {
    timeStamps: true
})


let userModel = mongoose.model("user", userSchema)
module.exports = userModel