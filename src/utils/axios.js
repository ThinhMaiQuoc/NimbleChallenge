import axios from 'axios';

const setupAxiosDefaults = () => {
    axios.defaults.baseURL = 'http://localhost:3001/api';
    axios.interceptors.request.use(config => {
        const token = localStorage.getItem('token');
        config.headers.Authorization = token ? `Bearer ${token}` : '';
        return config;
    });
};

export default setupAxiosDefaults;
