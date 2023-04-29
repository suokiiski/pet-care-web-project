require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

const Note = require('./models/note');

const {response} = require("express");
const bodyParser = require("body-parser");

//for authentication system
const User = require('./models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'jlbflkjfdghaigahknal$€@kajgbauegnaohgk,fm870!%(/?bkjah';

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.get('/api/notes', (req, res) => {
    Note.find({}).then(notes => {
        res.json(notes)
    })
});

app.get('/api/notes/:id', (req, res) => {
    Note.findById(req.params.id)
        .then(note => {
            if(note) {
                res.json(note);
            } else {
                res.status(404).end();
            }
        })
        .catch(error => {
            console.log(error);
            res.status(400).send({error: 'malformatted id'});
        })
});

app.delete('/api/notes/:id', (req, res) => {
    Note.findByIdAndRemove(req.params.id)
        .then(result => {
            res.status(204).end();
        })
        .catch(error => {
            res.status(400).end();
        })
})

app.post('/api/notes', (req, res) => {
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

    newNote.save()
        .then(savedNote => {
        res.json(savedNote);
        });
});

app.put('/api/notes/:id', (req, res) => {
    const body = req.body;

    const newNote = {
        src: body.src || 'https://img.freepik.com/free-vector/american-bobtail-cat-doodle-element-vector_53876-151536.jpg?w=740&t=st=1682273176~exp=1682273776~hmac=f964e2113497f3eeebd7a7b41cac535694a2817622d6cfdf688765aaf9a1691e',
        text: body.text,
        nimi: body.nimi,
        tel: body.tel,
        cat: body.cat
    }

    Note.findByIdAndUpdate(req.params.id, newNote, {new: true})
        .then(updNote => {
            res.json(updNote);
        })
        .catch(error => {
            res.status(400).end();
        })
})

//USER AUTHENTICATION STUFF STARTS HERE

app.post('/api/login', async (req, res) => {
    const {login, password} = req.body;

    const user = await User.findOne({login}).lean();

    if(!user) {
        return res.json({status: 'error', error: 'Invalid username/password'});
    }

    if(await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({
            id: user._id,
            login: user.login
        },
        JWT_SECRET
        );

        return res.json({status: 'ok', data: token});
    }

    res.json({status: 'error', error: 'Invalid username/password'});
})

//JOS EI TOIMI, TARKISTA ENSIN ETTÄ MUUTTUJILLA ON KAIKIALLA SAMAT NIMET
app.post('/api/register', async (req, res) => {
    const {login, password: plainTextPassword} = req.body;

    if(!login || typeof login !== 'string') {
        return res.json({status: 'error', error: 'invalid username'});
    }

    if(!plainTextPassword || typeof plainTextPassword !== 'string') {
        return res.json({status: 'error', error: 'invalid password'});
    }

    if(plainTextPassword.length < 8) {
        return res.json({
            status: 'error',
            error: 'The length of the password must be 8 characters at least!'
        })
    }

    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(plainTextPassword.toString(), salt);
    //console.log('hash', hash);

    try{
        const response = await User.create({
            login,
            password
        })
        console.log('User created successfully', response);
    } catch (error) {
        if(error.code === 11000){
            return res.json({status: 'error', error: 'username already in use'});
        }
        throw error;
    }

    res.json({status: 'ok'});
    /*console.log(req.body);
    */
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
