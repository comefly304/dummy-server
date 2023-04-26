const user = require('../models/user')

const router=require('express').Router()

router.post("/register",async(req,res)=>{
    try{
     const {name,email,password}=req.body

     const newuser=new user({
        name,
        email,
        password
     })
     await newuser.save()
     return res.json({
        success:true,
        user:newuser
     })
    }catch(err){
        return res.send(err)
    }
})

module.exports=router