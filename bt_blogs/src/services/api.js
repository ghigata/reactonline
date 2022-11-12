import axios from 'axios';
const BASE_URL = "https://khoat3.sg-host.com/wp-json";

const api = axios.create({
  baseURL: BASE_URL
});

export default api;
