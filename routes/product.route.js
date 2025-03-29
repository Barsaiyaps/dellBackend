const express = require("express");
const productRouter = express.Router();
const {productModel} = require("../models/product.model");


productRouter.get("/get-product",async (req,res)=>{
    try {
        const data = await productModel.find();
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})

productRouter.post("/add-product",async (req,res)=>{
    try {
        console.log(req.body)
        const data = new  productModel(req.body);
        console.log(data)
        await data.save();
        await res.send('New Product Added Successfully');
    } catch (error) {
        res.send(error)
    }
});

module.exports = productRouter;