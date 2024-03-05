require('dotenv').config(); // Placez cette ligne en haut de votre fichier principal (par exemple, server.js)

let express = require('express');
const connectDB = require('./config/connectDB');
const user = require('./routes/user');
const products=require('./routes/product')
const categorie=require('./routes/categorie')
const commande=require('./routes/commande')
const upload=require('./routes/upload')
const wafMiddleware=require('./WAF')
const path = require('path');
const config = require('./config');
const cors = require('cors');

let app=express();
connectDB()
app.use(express.json())
// // app.use(wafMiddleware);
app.use(wafMiddleware.addSecurityHeaders)
app.use(wafMiddleware.wafMiddleware)
app.get('/', (req, res) => {
    // Votre logique pour la page d'accueil
    res.send('Page d\'accueil');
  });
app.use('/api/uploads',express.static('uploads'))

app.use('/api/user',user)
app.use('/api/product',products)
app.use('/api/categorie',categorie)
app.use('/api/commande',commande)

app.use("/api/product/uploads",upload);
// // Dans votre code backend (avec Express.js)
// app.post('/api/track', (req, res) => {
//     const visitDetails = req.body; // Assurez-vous que vous avez body-parser configuré pour analyser le corps JSON
//     console.log(visitDetails);
//     // console.log(res)
 
//     res.status(200).send('Visite enregistrée');
//   });
  
const allowedDomains=config.allowedDomains;
console.log('rt',allowedDomains)

const app_key=config.app_key
app.use(cors({
  origin: allowedDomains,
  credentials: true,
}));

app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
  // Sécurité: Cliquer sur la protection de détournement
  res.setHeader('X-Frame-Options', 'sameorigin');
  // CSP: Définir une politique de sécurité du contenu
  res.setHeader('X-Powered-By', 'SECURAS');
    // console.log(req);
    next();
});
let PORT = process.env.PORT ||6000;
app.listen(PORT,(err)=>err? console.log(err):console.log(`server is running ${PORT}`));