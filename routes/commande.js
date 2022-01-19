let express=require('express');
const { addCommande } = require('../controllers/commande.controllers');
const auth = require('../middleware/auth');
let router=express.Router();
router.post('/newCommande',auth, addCommande)
module.exports=router