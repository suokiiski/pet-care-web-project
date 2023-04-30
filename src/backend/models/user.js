const mongoose = require('mongoose');

const url = `mongodb+srv://verafi:FaqKBmZq0sUmQn7l@cluster0.0o5m3zy.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(url)
    .then(result => {
        console.log('connected no MongoDB 2');
    })
    .catch((error) => {
        console.log('error connecting to MongoDB 2:', error.message);
    });

const userSchema = new mongoose.Schema({
    login: {type: String, required: true, unique: true},
    password: {type: String, required: true}
}, {collection: 'users'}
);

const model = mongoose.model('UserSchema', userSchema);
module.exports = model;