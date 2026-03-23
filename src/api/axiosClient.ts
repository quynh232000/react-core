import axios from 'axios';
import { setupInterceptors } from './interceptors';

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  timeout: 10000, // 10 giây timeout
});

// Kích hoạt Interceptors cho instance này
setupInterceptors(axiosClient);

export default axiosClient;