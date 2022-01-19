let mongoose=require('mongoose')
let Schema= mongoose.Schema



let userSchema=new Schema({
    firstName: String,
    email: String,
    phone: String,
    address: String,
    password: String,
    signDate: {
      type: Date,
      default: Date.now,
    },
  
    userRole: {
      type: String,
      default: 'User',
      roles: ['User', 'Admin','Manager'],
    },})
module.exports=mongoose.model('User',userSchema)