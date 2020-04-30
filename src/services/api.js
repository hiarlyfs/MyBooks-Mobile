import axios from 'axios';

const api = axios.create({
  baseURL: 'https://meuslivros-api.herokuapp.com',
});

export default api;
