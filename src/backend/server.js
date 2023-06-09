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

/**
 * Vastaa /api/notes-osoitteeseen lähettämään GET-pyyntöön, lähettää kaikki tietokannasta löytyvät ilmoitukset vastauksena
 */
app.get('/api/notes', (req, res) => {
    Note.find({}).then(notes => {
        res.json(notes)
    })
});

/**
 * Vastaa /api/notes/:id-osoitteeseen lähettämään GET-pyyntöön. Lähettää vastauksena ilmoituksen, jolla on sama id kuin parametrissa,
 * tai 404-statuksen, jos ilmoitusta ei löydy
 */
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

/**
 * Vastaa /api/notes/:id-osoitteeseen lähettämään DELETE-pyyntöön. Lähettää vastauksena status 204, jos ilmoitus löytyi,
 * tai status 400, jos ilmoitusta ei löytynyt
 */
app.delete('/api/notes/:id', (req, res) => {
    Note.findByIdAndRemove(req.params.id)
        .then(result => {
            res.status(204).end();
        })
        .catch(error => {
            res.status(400).end();
        })
})

/**
 * Vastaa /api/notes-osoitteeseen lähettämään POST-pyyntöön. Tallentaa uuden ilmoituksen tai lähettää status 400 vastauksena,
 * jos joku pakollisista kentistä puuttuu
 */
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
      "https://img.freepik.com/free-vector/paw-prints-trail-across-screen_78370-866.jpg?w=1060&t=st=1682770876~exp=1682771476~hmac=eddb53ae3d0853790bc316ea2f99c7d78c70d9b5013f940a8a8150c8465f520a",
    text: body.text,
    nimi: body.nimi,
    tel: body.tel,
    cat: body.cat,
    omistaja: body.omistaja,
    username: body.username
  });

    newNote.save()
        .then(savedNote => {
        res.json(savedNote);
        });
});

/**
 * Vastaa /api/notes/:id-osoitteeseen lähettämään PUT-pyyntöön. Korjaa ilmoituksen tietoja tai lähettä status 400 vastauksena,
 * jos kyseessä olevaa ilmoitusta ei ole olemassa
 */
app.put('/api/notes/:id', (req, res) => {
    const body = req.body;

    const newNote = {
        src: body.src || 'https://img.freepik.com/free-vector/paw-prints-trail-across-screen_78370-866.jpg?w=1060&t=st=1682770876~exp=1682771476~hmac=eddb53ae3d0853790bc316ea2f99c7d78c70d9b5013f940a8a8150c8465f520a',
        text: body.text,
        nimi: body.nimi,
        tel: body.tel,
        cat: body.cat,
        omistaja: body.omistaja,
        username: body.username
    }

    Note.findByIdAndUpdate(req.params.id, newNote, {new: true})
        .then(updNote => {
            res.json(updNote);
        })
        .catch(error => {
            res.status(400).end();
        })
})

/**
 * Vastaa /api/login-osoitteeseen lähettämään POST-pyyntöön. Tarkistaa onko käyttäjä olemassa ja onko käyttäjänimi ja
 * salasana oikein.
 */
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

/**
 * Vastaa /api/login-osoitteeseen lähettämään POST-pyyntöön. Tarkistaa onko käyttäjänimi ja salasana oikeassa muodossa ja
 * kryptaa salasanan
 */
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
