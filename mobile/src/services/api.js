import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.97.225.172:3333',
});

export default api;