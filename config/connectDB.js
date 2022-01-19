let mongoose=require('mongoose')
let config=require('config')
let db=config.get('db')


let connectDB=async()=>{
try {
    await mongoose.connect(db)
    console.log("data base is successfilly connected ")
} catch (error) {
    console.log(error.message)
}
}
module.exports=connectDB