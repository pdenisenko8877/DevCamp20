import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3333',  // process.env.API_URL
  responseType: 'json',
});

export default apiClient;
