const mongoose =require('mongoose')
const ObjectId=mongoose.Schema.Types.ObjectId
const Bookschema=mongoose.Schema({
    name:String,
    author:{
        type:ObjectId,
        required:true,
        ref:'Author'

    },
    price:Number,
    ratings:Number,
    publisher: {
        type:ObjectId,
        required:true,
        ref:'Publisher'
    }
})
module.exports.Bookschema=Bookschema