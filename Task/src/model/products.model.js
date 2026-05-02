// Module Imports
const mongoose = require('mongoose');

// Schema
const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    category: String,
    stock: Number,
}, { timestamps: true });

// Model
const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;