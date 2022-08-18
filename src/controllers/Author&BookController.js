router.get('/find',async(req,resp) =>{
    let author= await Author.findOne({ author_name:"Chetan Bhagat"})
    let id=author.author_id
    let books=await Book.find({author_id:id})
    resp.send(books)
//  ----------------------------1---------------------------------------//
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

module.exports.Book= Book