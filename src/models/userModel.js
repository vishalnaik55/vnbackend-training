const mongoose = require('mongoose');

const createUserSchema = new mongoose.Schema( {
    Name: String,
    address: String,
    age: Number,
    balance: {
        amount : Number,
        default: false,
    
    },
    gender: {
        type: String,
        enum: ["male", "female", "other"] 
    },
    isFreeAppUser: false
    
   
}, { timestamps: true });

module.exports = mongoose.model('User', createUserSchema) 



