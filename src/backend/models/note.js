require('dotenv').config();
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const url = `mongodb+srv://verafi:FaqKBmZq0sUmQn7l@cluster0.0o5m3zy.mongodb.net/?retryWrites=true&w=majority`;

console.log('connecting to the', url);
/**
 * Luo yhteyden tietokantaan johon ilmoitukset tallennetaan
 */
mongoose.connect(url)
    .then(result => {
        console.log('connected no MongoDB 1');
    })
    .catch((error) => {
        console.log('error connecting to MongoDB 1:', error.message);
    });

/**
 * Määrittää tietokannan skeeman
 * @type {module:mongoose.Schema<any, Model<any, any, any, any>, {}, {}, {}, {}, DefaultSchemaOptions, {nimi: StringConstructor, src: StringConstructor, cat: BooleanConstructor, tel: StringConstructor, text: StringConstructor, omistaja: BooleanConstructor, username: StringConstructor}, HydratedDocument<FlatRecord<{nimi: StringConstructor, src: StringConstructor, cat: BooleanConstructor, tel: StringConstructor, text: StringConstructor, omistaja: BooleanConstructor, username: StringConstructor}>, unknown>>}
 */
const noteSchema = new mongoose.Schema({
    src: String,
    text: String,
    nimi: String,
    tel: String,
    cat: Boolean,
    omistaja: Boolean,
    username: String
});

/**
 * Poistaa ylimääräiset sarakkeet tietokannan vastauksesta
 */
noteSchema.set('toJSON', {
    transform: (doc, returnedObj) => {
        returnedObj.id = returnedObj._id.toString();
        delete returnedObj._id;
        delete returnedObj.__v;
    }
})

module.exports = mongoose.model('Note', noteSchema);
