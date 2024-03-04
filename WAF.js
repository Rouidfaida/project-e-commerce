const axios = require('axios');

const wafMiddleware = async (req, res, next) => {
    const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const userAgent = req.headers['user-agent'];

    // Préparez les données à envoyer
    const dataToSend = {
        ip: clientIp,
        userAgent: userAgent,
        // Ajoutez d'autres détails de req et res que vous souhaitez envoyer
    };

    try {
        await axios.post('https://beta.cyber-shield.fr/api2/visits', dataToSend, {
            headers: {
                'Content-Type': 'application/json',
                // Ajoutez d'autres en-têtes nécessaires ici
            }
        });
        console.log('Data sent to API successfully');
    } catch (error) {
        console.error('Error sending data to API:', error.response ? error.response.data : error.message);
    }

    next();
};

module.exports = wafMiddleware;
