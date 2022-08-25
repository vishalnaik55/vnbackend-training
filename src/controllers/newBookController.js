const newBookModel = require("../controllers/newBookModel")

const newBookModelvs = async function(req, res){
    let newBookModel = req.body
    let newBookModelvs = await newBookModel.find().populate('author_id')
    res.send = ({data: newBookModelvs,newBookModel})
}

module.exports.newBookModelvs = newBookModelvs