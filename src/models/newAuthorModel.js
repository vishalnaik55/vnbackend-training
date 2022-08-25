const mongoose = require('mongoose')
const authorschema = mongoose.Schema({

    authorName: String,
    age: Number,
    address: String,
    rating: Number
})
module.exports = mongoose.model('Author', authorschema)