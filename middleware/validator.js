let {check, validationResult}=require('express-validator')
exports.signUpRoles=()=>[
    check('firstName','this field is require').notEmpty(),
    check('address','this field is require').notEmpty(),
    check('email','this field is require ').notEmpty(),
    check('email','this shuld be a valid Email ').isEmail(),
    check('password','this shuld be at least 5 digets').isLength({min:5}),
    check('phone','this shuld be at least 5 digets').isLength({min:6})
]
exports.validator=(req,res,next)=>{
let errors=validationResult(req)
return errors.isEmpty()?next():
res.status(400).json({errors:errors.array()})
}