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

// Extraction de la chaîne de recherche de la requête
const searchQuery = req.query;

// Pour extraire spécifiquement '1=1', où '1' est le paramètre
const paramValue = req.query['1'];

// Afficher dans la console
console.log('Search Query:', searchQuery);
console.log('Parameter `1` value:', paramValue);
    next();
};

module.exports = wafMiddleware;
