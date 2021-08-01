import axios from 'axios';


export const streamsApi = axios.create({
    baseURL: 'http://localhost:3001'
});