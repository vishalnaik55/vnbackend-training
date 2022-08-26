const productModel = require("../models/productModel")


const createProduct= async function(req,res,next) {
    let productdata=req.body
    let product=productdata.productId
    if(!product) return res.send({msg: "productId is missing"})

    // let savedata= await productModel.create(productdata)
    // res.send({data:savedata})
    // next()
}

module.exports.createProduct=createProduct