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

  // Extraire la chaîne de requête complète
  const queryString = req.originalUrl.split('?')[1]; // Cela donne "1=1"

  // Si vous voulez extraire chaque paramètre séparément dans un cas plus général
  const queryParams = new URLSearchParams(queryString);
  
  // Log pour voir ce que nous avons obtenu
  console.log('Query string:', queryString); // Affiche "1=1"
  console.log('Parsed query:', Object.fromEntries(queryParams)); // Affiche { '1': '1' }

  next();
};

module.exports = wafMiddleware;

module.exports = wafMiddleware;
