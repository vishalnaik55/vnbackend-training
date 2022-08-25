const publisherModel = require("../models/publisherModel")

const oldPublisher = async function (req, res) {
    let myPublisher = req.body
    let newPublisher = await publisherModel.find().populate('author_id')
    res.send({data: newPublisher,myPublisher,oldPublisher})

}
module.exports.oldPublisher= oldPublisher