const User = require("../models/user")
let bc =require('bcryptjs')
let jwt=require('jsonwebtoken')
let config=require('config')
let secret=config.get('secret')
//sign up user
exports.signUp=async(req,res)=>{
    let {firstName,email,password,phone,adress,signDate,userRole} =req.body
    try {
        let existUser=await User.findOne({email})
        if(existUser){
            res.status(400).json({msg:'this email have a account here'})
        }
         let newUser=new User({
         firstName,
         email,
         password,
         phone,
         adress,
         signDate,
         userRole
         })
         let salt=await bc.genSalt(10);
         let hash=await bc.hashSync(password,salt)
         newUser.password=hash
         await newUser.save()
         let payload={
             id:newUser._id,
             name:newUser.firstName,
             role:newUser.userRole

         }
        let token=jwt.sign(payload,secret)
         res.send(
             {token,
        newUser

            });
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
// login user
exports.login=async(req,res)=>{
    let{email,password}=req.body
    try {
        let theUser=await User.findOne({email})
        if(!theUser)
        {
            res.status(400).json({msg:'the email or password are wrong '})
        }
        let isMath=await bc.compare(password,theUser.password)
        if(!isMath){
            res.status(400).json({msg:'the email or password are wrong '})    
        }
        let payload={
            id:theUser._id,
            email:theUser.email,
            role:theUser.userRole
        }
        console.log(payload)
        let token =  jwt.sign(payload,secret)
        res.send({token,theUser});
    } catch (error) {
        res.status(500).json({error:error.message})

    }
}
//get user
exports.getUser=(req,res)=>{
    res.send(req.user);
}
exports.getUsers = async (req, res) => {
    try {
      let listUsers= await User.find()
      res.send(listUsers)
    } catch (error) {
      res.status(500).json({errors: error.message});
    }
  };
//add manager
exports.addManager=async(req,res)=>{
    let {firstName,email,password,phone,adress,signDate,userRole} =req.body
    try {
        let existUser=await User.findOne({email})
        if(existUser){
            res.status(400).json({msg:'this email have a account here'})
        }
         let newUser=new User({
         firstName,
         email,
         password,
         phone,
         adress,
         signDate,
         userRole
         })
         let salt=await bc.genSalt(10);
         let hash=await bc.hashSync(password,salt)
         newUser.password=hash
         await newUser.save()
         let payload={
             id:newUser._id,
             name:newUser.firstName,
             role:newUser.userRole

         }
        let token=jwt.sign(payload,secret)
         res.send(
             {token,
        newUser

            });
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
            
//update manager
exports.putManager=async(req,res)=>{
    try {
        let UpdateManager=await   User.findByIdAndUpdate(req.params.id,{...req.body},{new:true})
        res.send(UpdateManager);
    } catch (error) {
        res.status(500).json({errors: error.message})
    }
}
//delete manager
exports.deleteManager=async(req,res)=>{
    try {
        let deletManager=await   User.findByIdAndDelete(req.params.id)
        res.send({msg: `${deletManager.firstName} was successfully deleted`});
    } catch (error) {
        res.status(500).json({errors: error.message})
    }
}