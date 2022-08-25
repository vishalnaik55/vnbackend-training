const newAuthorModel = require('./newAuthorController')

const newAuthor = async function (req, res){
    let newmyAuthor = await newAuthorModel.find().populate('author_id')
    // console.log(date: createnewAuthor)
    res.send({data: newAuthor,newmyAuthor})
}

module.exports.newAuthor= newAuthor