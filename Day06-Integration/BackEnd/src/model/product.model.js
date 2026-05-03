const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    description: String,
    category: {
        type: String,
        enum: ["MEN", "WOMEN", "KIDS"],
        default: "MEN",
    },
    price: {
        amount: {
            type: Number,
            required: true
        },
        currency: {
            type: String,
            enum: ["INR", "USD"],
            default: "INR"
        }

    },
    stock: {
        type: Number,
        default: 0,
        required: true
    }
}, {
    timestamps: true
})

const productModel = mongoose.model("products", productSchema)

module.exports = productModel