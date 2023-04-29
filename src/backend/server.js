require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const Note = require("./models/note");

const { response } = require("express");

app.use(express.json());
app.use(cors());

app.get("/notes", (req, res) => {
  Note.find({}).then((notes) => {
    res.json(notes);
  });
});

app.get("/notes/:id", (req, res) => {
  Note.findById(req.params.id)
    .then((note) => {
      if (note) {
        res.json(note);
      } else {
        res.status(404).end();
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(400).send({ error: "malformatted id" });
    });
});

app.delete("/notes/:id", (req, res) => {
  Note.findByIdAndRemove(req.params.id)
    .then((result) => {
      res.status(204).end();
    })
    .catch((error) => {
      res.status(400).end();
    });
});

app.post("/notes", (req, res) => {
  const body = req.body;

  if (body.text === undefined) {
    return res.status(400).json({
      error: "description missing",
    });
  } else if (body.nimi === undefined) {
    return res.status(400).json({
      error: "name missing",
    });
  } else if (body.tel === undefined) {
    return res.status(400).json({
      error: "phone number missing",
    });
  }

  const newNote = new Note({
    src:
      body.src ||
      "https://img.freepik.com/free-vector/american-bobtail-cat-doodle-element-vector_53876-151536.jpg?w=740&t=st=1682273176~exp=1682273776~hmac=f964e2113497f3eeebd7a7b41cac535694a2817622d6cfdf688765aaf9a1691e",
    text: body.text,
    nimi: body.nimi,
    tel: body.tel,
    cat: body.cat,
    omistaja: body.omistaja,
  });

  newNote.save().then((savedNote) => {
    res.json(savedNote);
  });
});

app.put("/notes/:id", (req, res) => {
  const body = req.body;

  const newNote = {
    src:
      body.src ||
      "https://img.freepik.com/free-vector/american-bobtail-cat-doodle-element-vector_53876-151536.jpg?w=740&t=st=1682273176~exp=1682273776~hmac=f964e2113497f3eeebd7a7b41cac535694a2817622d6cfdf688765aaf9a1691e",
    text: body.text,
    nimi: body.nimi,
    tel: body.tel,
    cat: body.cat,
  };

  Note.findByIdAndUpdate(req.params.id, newNote, { new: true })
    .then((updNote) => {
      res.json(updNote);
    })
    .catch((error) => {
      res.status(400).end();
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
