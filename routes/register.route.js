const express = require("express");
const registerRoute = express.Router();
const {registerModel} = require("../models/register.model");

registerRoute.post("/register",async (req,res)=>{
    try {
        
        const data = new  registerModel(req.body);
        await data.save();
        await res.send('New user Registered Successfully');
    } catch (error) {
        res.send(error)
    }
});

module.exports = registerRoute;