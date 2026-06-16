import mongoose, { Schema } from "mongoose";

const noteSchema = new Schema({
    title: String,
    description: String,
    user: String
}, { timestamps: true })

const noteModel = mongoose.model("notes", noteSchema);
export default noteModel