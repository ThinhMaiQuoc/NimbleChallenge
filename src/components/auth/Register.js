import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/Register.scss';
import { debounce } from '../../utils/debounce';
import { validateUserData } from '../../utils/validation';

const Register = () => {
    const [userData, setUserData] = useState({ username: '', email: '', password: '' });
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });

        if (name === 'email') {
            debouncedCheckEmail(value);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newErrors = validateUserData(userData);
        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) return;

        try {
            await axios.post('/auth/register', userData);
            setMessage('Registration successful!');
            setTimeout(() => navigate('/login'), 2000);
        } catch (error) {
            const errorMessage = error.response?.data || 'Registration failed.';
            setMessage(errorMessage);
            setIsError(true);
        }
    };

    const checkEmailAvailability = async (email) => {
        try {
            const response = await fetch('http://localhost:3001/api/auth/checkEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            const data = await response.json();
            if (!data.isAvailable) {
                setMessage('Email is taken, please enter another email!');
                setIsError(true);
            }
        } catch (error) {
            setMessage('An error occurred.');
            setIsError(true);
        }
    };

    const debouncedCheckEmail = useCallback(debounce(checkEmailAvailability, 500), []);

    return (
        <div className="register-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    value={userData.username}
                    onChange={handleInputChange}
                    placeholder="Username"
                />
                {errors.username && <p className="error">{errors.username}</p>}
                <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                />
                {errors.email && <p className="error">{errors.email}</p>}
                <input
                    type="password"
                    name="password"
                    value={userData.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                />
                {errors.password && <p className="error">{errors.password}</p>}
                <button type="submit">Register</button>
            </form>

            {message && (
                <div className={isError ? 'error-message' : 'success-message'}>
                    {message}
                </div>
            )}
        </div>
    );
};

export default Register;
