import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8082/api/students', // Ensure this is your Spring Boot URL
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
