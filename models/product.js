let mongoose=require('mongoose')
let Schema=mongoose.Schema


let productSchema=new Schema({
    title: {
        type: String,
        required: true,
      },
      
      description: {
        type: String,
        required: true,
      },
      imageUrl: String,
    
      price: {
        type: Number,
        required: true,
      },
      category:{
          type:String,
          required:true
      },
      quantity: {
        type: Number,
        required: true,
      },
      quantityStock:{
        type:Number,
      },
     
      date_product: {
        type: Date,
        default: Date.now,
      },
})
module.exports=mongoose.model('Product',productSchema)