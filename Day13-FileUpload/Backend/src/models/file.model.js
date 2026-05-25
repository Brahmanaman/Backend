const mongoose = require("mongoose")

const fileSchema = new mongoose.Schema({
    images:
    {
        type: String,
        required: true
    }
    ,
    name: String
}, {
    timestamps: true
})

const fileModel = mongoose.model("file", fileSchema)

module.exports = fileModel