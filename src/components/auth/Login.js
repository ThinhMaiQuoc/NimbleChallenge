// src/components/auth/Login.js

import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/Login.scss';
import { validateCredentials } from '../../utils/validation';

const Login = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newErrors = validateCredentials(credentials);
        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) return;

        try {
            const response = await axios.post('/auth/login', credentials);
            localStorage.setItem('token', response.data.token);
            navigate('/dashboard');
        } catch (error) {
            const status = error.response?.status;
            const errorMessage = error.response?.data || 'An error occurred.';

            if (status === 404) {
                setMessage('Email has not been registered!');
            } else if (status === 401) {
                setMessage('Invalid credentials.');
            } else {
                setMessage(errorMessage);
            }

            setIsError(true);
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={credentials.email}
                    onChange={handleInputChange}
                />
                {errors.email && <p className="error">{errors.email}</p>}

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={handleInputChange}
                />
                <button type="submit">Login</button>
                {message && (
                    <div className={isError ? 'error-message' : 'success-message'}>
                        {message}
                    </div>
                )}
            </form>
        </div>
    );
};

export default Login;
