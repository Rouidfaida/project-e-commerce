let express=require('express');
const { signUp, login,getUsers, getUser, addManager, putManager, deleteManager } = require('../controllers/user.controllers');
const auth = require('../middleware/auth');
const roleCheck = require('../middleware/role');
const { signUpRoles,validator } = require('../middleware/validator');
let router=express.Router();


router.post('/signUp',signUpRoles(),validator,signUp)
router.post('/login', login)
router.get('/get',auth,getUser)
router.get('/getUsersList',getUsers)

router.post('/addManager',auth,roleCheck(['Admin']),addManager)
router.put('/putManager/:id',auth,roleCheck(['Admin']),putManager)
router.delete('/deleteManager/:id',auth,roleCheck(['Admin']),deleteManager)

module.exports=router