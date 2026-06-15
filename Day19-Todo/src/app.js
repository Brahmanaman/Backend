import express from "express"
import NoteModel from "./models/note.model.js"
import mongoose from "mongoose"

const app = express()
app.use(express.json())


/**
 * @route POST /api/notes
 * @desc Create a note need title and description in the request body
 * @access Public
 */
app.post("/api/notes", async (req, res) => {
    const { title, description } = req.body

    // ------ validation ------
    if (!title || !description) {
        return res.status(400).json({ message: "Title and body are required" })
    }

    if (title.trim().length < 3) {
        return res.status(400).json({ message: "Title must be at least 3 characters" })
    }

    if (description.trim().length < 10) {
        return res.status(400).json({ message: "Description must be at least 10 characters" })
    }

    // ---- if validation passed, create notes ----

    const newNote = await NoteModel.create({ title, description })
    return res.status(201).json({
        message: "Note created successfully",
        note: newNote
    })
})
/**
 * @route GET /api/notes
 * @desc Get all notes
 * @access Public
 */
app.get("/api/notes", async (req, res) => {
    const notes = await NoteModel.find()
    return res.status(200).json({
        message: "Notes fetched successfully",
        notes: notes
    })
})

/**
 * @route GET /api/notes/:id
 * @desc Get a note by id
 * @access Public
 */
app.get("/api/notes/:id", async (req, res) => {
    const id = req.params.id
    const notes = await NoteModel.findById(id)
    return res.status(200).json({
        message: "Note fetched successfully",
        note: notes
    })
})

/**
* @route PUT /api/notes/:id
* @desc Update a note by id
* @access Public
*/
app.put("/api/notes/:id", async (req, res) => {
    const { description } = req.body
    const id = req.params.id

    if (!description) {
        return res.status(400).json({ message: "Description is required" })
    }
    if (description.trim().length < 10) {
        return res.status(400).json({ message: "Description must be at least 10 characters" })
    }

    const note = await NoteModel.findById(id)
    if (!note) {
        return res.status(404).json({ message: "Note not found" })
    }

    note.description = description
    await note.save()
    return res.status(200).json({
        message: "Note updated successfully",
        note: note
    })
})

/**
 * @route DELETE /api/notes/:id
 * @desc Delete a note by id
 * @access Public
 */
app.delete("/api/notes/:id", async (req, res) => {
    const id = req.params.id

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid note id" })
    }

    const note = await NoteModel.findByIdAndDelete(id)
    if (!note) {
        return res.status(400).json({ message: "Note not found" })
    }

    return res.status(200).json({
        message: "Note deleted successfully",
        note: note
    })
})

export default app