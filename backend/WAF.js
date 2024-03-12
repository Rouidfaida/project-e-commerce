// Middleware WAF.js
const express = require('express');

// Remarquez qu'il n'y a pas de besoin de créer une instance d'express avec express() ici
// Nous exportons simplement une fonction middleware

// Importez vos helpers et configurations comme nécessaire
// const { analyzeRequest, getIpDetails, logRequest } = require('./helpers');

const wafMiddleware = (req, res, next) => {
  // Obtenez l'IP du client, le User-Agent, etc.
  const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const userAgent = req.headers['user-agent'];

  const queryString = req.originalUrl?.split('?')[1] || '';
console.log('ip',clientIp)
  // Log the entire query string
  console.log('Query string:', queryString);

  // Parse individual query parameters
  const queryParams = new URLSearchParams(queryString);

  // Log parsed query parameters
  console.log('Parsed query:', Object.fromEntries(queryParams));

  next();
};
const addSecurityHeaders = (req, res, next) => {
  // Sécurité: Empêcher le navigateur d'interpréter les fichiers comme autre chose que leur type MIME déclaré
  res.setHeader('X-Content-Type-Options', 'nosniff');
  // Sécurité: Cliquer sur la protection de détournement
  res.setHeader('X-Frame-Options', 'sameorigin');
  // CSP: Définir une politique de sécurité du contenu
  res.setHeader('X-Powered-By', 'SECURAS');
  
  // Appeler next() pour passer à la prochaine fonction middleware
  next();
};

module.exports ={ wafMiddleware,addSecurityHeaders};

