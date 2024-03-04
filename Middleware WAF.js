// Middleware WAF.js
const express = require('express');
const app = express();

// Importez vos helpers et configurations comme nécessaire

app.use(async (req, res, next) => {
//   // Obtenez l'IP du client, le User-Agent, etc.
//   const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
//   const userAgent = req.headers['user-agent'];

 console.log(req)
 console.log(res)
});
