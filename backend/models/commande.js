let mongoose=require('mongoose')
let Schema=mongoose.Schema;

let commandeSchema=new Schema({
    userId: {
        type: String,
      },
      items: [
        {
          productId:  String,
          title: String,
          quantity:  Number,
          price: Number,
        },
      ],
   bill:String,
    
    });
module.exports=mongoose.model('Commande',commandeSchema)