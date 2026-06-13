import mongoose from "mongoose";
import { ROLES } from "../constant/model.constant";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: Object.values(ROLES),
        default: ROLES.SCORER
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

const userModel = mongoose.model("User", userSchema);
export default userModel