let mongoose=require('mongoose')
let Schema=mongoose.Schema

let categorieSchema= new Schema({
    name: {
        type: String,
        required: true,
      },
    })
module.exports=mongoose.model('Categorie',categorieSchema)