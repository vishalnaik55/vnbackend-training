const { count } = require("console")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find( {authorName : "HO" } )
    console.log(allBooks)
    if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
    else res.send({msg: "No books found" , condition: false})
}


const updateBooks= async function (req, res) {
    let data = req.body // {sales: "1200"}
    // let allBooks= await BookModel.updateMany( 
    //     { author: "SK"} , //condition
    //     { $set: data } //update in data
    //  )
    let allBooks= await BookModel.findOneAndUpdate( 
        { authorName: "ABC"} , //condition
        { $set: data }, //update in data
        { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
     )
     
     res.send( { msg: allBooks})
}

const deleteBooks= async function (req, res) {
    // let data = req.body 
    let allBooks= await BookModel.updateMany( 
        { authorName: "FI"} , //condition
        { $set: {isDeleted: true} }, //update in data
        { new: true } ,
     )
     
     res.send( { msg: allBooks})
}

// -------------------------------------------------------------------------//
    router.get('/find',async(req,resp) =>{
    let author= await Author.findOne({ author_name:"Chetan Bhagat"})
    let id=author.author_id
    let books=await Book.find({author_id:id})
    resp.send(books)
 ----------------------------1---------------------------------------//
  let book= await Book.findOne({name:"Two states"})   
  let id=book.author_id
  let author=await Author.findOne({author_id:id})
  let updatebook=await Book.findOneAndUpdate({name:"Two states"},{
    $set:{
        price:100
    }  
  })
  resp.send(updatebook)
// ------------------------------1--------------------------------------------//
      let books=await Book.find({price : { $gte : 50 ,$lte:100}})
      let books=await Book.find({price : { $gte : 50 ,$lte:100}}).select({author_id:1})

      let arr=[]
      books.map(item =>{
        arr.push(item.author_id)
      })
      
      let item= new Set(arr)
      let array=Array.from(item)
      // array=[1,2]
      let authors=await Author.find({author_id :{$in :array}}).select({author_name:1,_id:0})
      resp.send(authors)

     
})

// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.updateBooks= updateBooks
module.exports.deleteBooks= deleteBooks
