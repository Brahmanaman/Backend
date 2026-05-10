import e from "express";
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: [true, "Username already exists"], //unique:true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email already exists"], //unique:true
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    }
})

const userModel = mongoose.model("users", userSchema);

export default userModel;