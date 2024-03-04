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

    console.log('errrererr',req.query);

    next();
};

module.exports = wafMiddleware;
