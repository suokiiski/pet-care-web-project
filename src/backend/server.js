require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const Note = require('./models/note');

//poistettava
const data = require('../data.json');
const {response} = require("express");

//poistettava
const url = `mongodb+srv://verafi:FaqKBmZq0sUmQn7l@cluster0.0o5m3zy.mongodb.net/?retryWrites=true&w=majority`

app.use(express.json());
app.use(cors());

app.get('/notes', (req, res) => {
    Note.find({}).then(notes => {
        res.json(notes)
    })
});

app.get('/notes/:id', (req, res) => {
    Note.findById(req.params.id).then(note => {
        res.json(note);
    })
});

app.delete('/notes/:id', (req, res) => {
    const id = Number(req.params.id);


    newData = data.filter(item => item.id != id);
    data.concat(newData);
    res.status(204).end();
})

app.post('/notes', (req, res) => {
    const body = req.body;

    if(body.text === undefined) {
        return res.status(400).json({ 
            error: 'description missing' 
        });    
    } else if(body.nimi === undefined) {
        return res.status(400).json({ 
            error: 'name missing' 
        }); 
    } else if(body.tel === undefined) {
        return res.status(400).json({ 
            error: 'phone number missing' 
        }); 
    }

    //Tässä voi olla virheitä
    const newNote = new Note ({
        src: body.src || 'https://img.freepik.com/free-vector/american-bobtail-cat-doodle-element-vector_53876-151536.jpg?w=740&t=st=1682273176~exp=1682273776~hmac=f964e2113497f3eeebd7a7b41cac535694a2817622d6cfdf688765aaf9a1691e',
        text: body.text,
        nimi: body.nimi,
        tel: body.tel,
        cat: body.cat
    });

    newNote.save()
        .then(savedNote => {
        res.json(savedNote);
        });
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
