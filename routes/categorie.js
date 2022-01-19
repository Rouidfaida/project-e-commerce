let express=require('express')
const { addCategorie, putCategorie, getCategorieById, getCategorie, deletCategorie } = require('../controllers/categorie.controllers')
const auth = require('../middleware/auth')
const roleCheck = require('../middleware/role')
let router=express.Router()


router.post('/postCategorie',auth,roleCheck(['Manager']),addCategorie)
router.put('/putCategorie/:id',auth,roleCheck(['Manager']),putCategorie)
router.delete('/deleteCategorie/:id',auth,roleCheck(['Manager']),deletCategorie)
router.get('/getCategorie/:id',getCategorieById)
router.get('/getCategorie/',getCategorie)
module.exports=router