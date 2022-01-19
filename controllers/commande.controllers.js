const Commande = require("../models/commande");
const Product = require("../models/product");
const User = require("../models/user");
let jwt=require('jsonwebtoken')
let config=require('config')
let secret=config.get('secret')




exports.addCommande = async (req, res) => {
    
  let token = req.headers.authorization;
  let decoded = jwt.verify(token, secret);
  let user = await User.findById(decoded.id);
  let userId = user.id;
  try {
    let theOrder = req.body;  
    let anItems=[]
    for (let i = 0; i < theOrder.commande.length; i++) {
      anItems.push({
        productId:theOrder.commande[i].productId,
        title:theOrder.commande[i].title,
        quantity:theOrder.commande[i].quantity,
        price:theOrder.commande[i].price,
      });
    }
    // console.log(userID)
    let newCommande = new Commande({
      userId:userId,
      items:anItems,
    });
    newCommande.save();
    res.send(newCommande);
  } catch (error) {
    console.log(error.message);
  }
};