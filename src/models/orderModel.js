const mongoose = require('mongoose');

const createOrderSchema = new mongoose.Schema({
    date: String,
    amount: Number,
},
    { timestamps: true });

    module.exports=mongoose.model('Order',createOrderSchema)