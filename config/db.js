const mongoose=require('mongoose')

function Connection(){
    mongoose.connect('mongodb+srv://dummy:1234@cluster0.vfwao3m.mongodb.net/?retryWrites=true&w=majority')
    console.log('mongodb connected')
}

module.exports=Connection
