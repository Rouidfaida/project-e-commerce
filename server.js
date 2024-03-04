require('dotenv').config(); // Placez cette ligne en haut de votre fichier principal (par exemple, server.js)

let express = require('express');
const connectDB = require('./config/connectDB');
const user = require('./routes/user');
const products=require('./routes/product')
const categorie=require('./routes/categorie')
const commande=require('./routes/commande')
const upload=require('./routes/upload')
const wafMiddleware=require('./Middleware WAF')
const path = require('path');
const config = require('./config');
const cors = require('cors');

let app=express();
connectDB()
app.use(express.json())
app.use(wafMiddleware);

app.use('/api/uploads',express.static('uploads'))

app.use('/api/user',user)
app.use('/api/product',products)
app.use('/api/categorie',categorie)
app.use('/api/commande',commande)

app.use("/api/product/uploads",upload);
const allowedDomains=config.allowedDomains;
console.log('rt',allowedDomains)

const app_key=config.app_key
app.use(cors({
  origin: allowedDomains,
  credentials: true,
}));


let PORT = process.env.PORT ||6000;
app.listen(PORT,(err)=>err? console.log(err):console.log(`server is running ${PORT}`));