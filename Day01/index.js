const express = require("express");

const app = express();

//middleware to parse JSON bodies
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello world");
})

app.get("/about", (req, res) => {
    res.send("this is about page")
})

app.get("/home", (req, res) => {
    res.send("this is home page")
})

const notes = [];

app.post("/addNote", (req, res) => {
    notes.push(req.body);
    res.send("note added successfully");
})

app.get("/getNotes", (req, res) => {
    res.json(notes);
})


app.listen(3000, () => {
    console.log("server is listening on http://localhost:3000")
})