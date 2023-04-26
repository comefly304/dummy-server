const express =require('express')
const Connection = require('./config/db')
const router = require('./routes/user')

const app=express()


app.use(express.json())
app.use("/user",router)
app.get("/",async(req,res)=>{
    try{
     return res.json({
        msg:"welcome to home"
     })
    }catch(err){
        return res.send(err)
    }
})


const PORT=8080
app.listen(PORT,()=>{
    Connection()
    console.log(`server is listening in port ${PORT}`)
})