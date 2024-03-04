
import axios from 'axios';

const regex = /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/;
const isLocalhost = (window.location.hostname === 'localhost' ||
                     window.location.hostname === '[::1]' ||
                     regex.test(window.location.hostname));
const API_URL = isLocalhost ? 'https://localhost:6000' : 'http://youtube.cyber-shield.fr';

console.log(`API URL: ${API_URL}`);
export const Axios = axios.create({
    withCredentials: true,
    baseURL: API_URL,
    mode: 'cors'
  });


