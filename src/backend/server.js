const express = require('express');
const cors = require('cors');

const app = express();
const data = require('../data.json');
const port = 3001;

app.use(express.json());
app.use(cors());

app.get('/notes', (req, res) => {
    console.log(data);
    res.json(data);
});

app.get('/notes/:id', (req, res) => {
    const id = Number(req.params.id);

    const note = data.find(item => item.id === id);
    if (note) {
        res.json(note);
      } else {
        res.status(404).end();
      }
});

app.delete('/notes/:id', (req, res) => {
    const id = Number(req.params.id);


    newData = data.filter(item => item.id != id);
    data.concat(newData);
    res.status(204).end();
})

app.post('/notes', (req, res) => {
    const body = req.body;

    if(!body.text) {
        return res.status(400).json({ 
            error: 'description missing' 
        });    
    } else if(!body.nimi) {
        return res.status(400).json({ 
            error: 'name missing' 
        }); 
    } else if(!body.tel) {
        return res.status(400).json({ 
            error: 'phone number missing' 
        }); 
    }

    const newNote = {
        id: generateId(),
        src: body.src || 'https://i.pinimg.com/originals/6f/df/bc/6fdfbc41d6a8e26d4b9073bc1afd899f.jpg',
        alt: 'Pet photo',
        figcaption: 'Pet photo',
        text: body.text,
        nimi: body.nimi,
        tel: body.tel,
        cat: false
    }

    data.concat(newNote);
    res.json(newNote);
})

const generateId = () => {
    const maxId = data.length > 0
    ? Math.max(...data.map(d => d.id))
    : 0

    return maxId + 1;
}

app.listen(port, () => console.log(`Server running on port ${port}`));
