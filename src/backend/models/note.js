require('dotenv').config();
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const url = `mongodb+srv://verafi:FaqKBmZq0sUmQn7l@cluster0.0o5m3zy.mongodb.net/?retryWrites=true&w=majority`;

console.log('connecting to the', url);
mongoose.connect(url)
    .then(result => {
        console.log('connected no MongoDB');
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message);
    });

const noteSchema = new mongoose.Schema({
    src: String,
    text: String,
    nimi: String,
    tel: String,
    cat: Boolean
});

noteSchema.set('toJSON', {
    transform: (doc, returnedObj) => {
        returnedObj.id = returnedObj._id.toString();
        delete returnedObj._id;
        delete returnedObj.__v;
    }
})

module.exports = mongoose.model('Note', noteSchema);