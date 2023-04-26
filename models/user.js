const mongoose=require('mongoose')


const Userschema=new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String}
},{
    timestamps:true
})

const user=mongoose.model("user",Userschema)

module.exports=user