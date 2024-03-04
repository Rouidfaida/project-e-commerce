let express = require('express');
const connectDB = require('./config/connectDB');
const user = require('./routes/user');
const products=require('./routes/product')
const categorie=require('./routes/categorie')
const commande=require('./routes/commande')
const upload=require('./routes/upload')

const path = require('path');
const config = require('./config');
let app=express();
connectDB()
app.use(express.json())
app.use('/uploads',express.static('uploads'))

app.use('/user',user)
app.use('/product',products)
app.use('/categorie',categorie)
app.use('/commande',commande)

app.use("/product/uploads",upload);
const allowedDomains=config.allowedDomains;
console.log('rt',allowedDomains)

const app_key=config.app_key
app.use(cors({
  origin: allowedDomains,
  credentials: true,
}));


let PORT = process.env.PORT ||6000;
app.listen(PORT,(err)=>err? console.log(err):console.log(`server is running ${PORT}`));