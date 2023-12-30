import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isTokenExpired } from '../utils/token';

const withAuth = (Component) => {
    return (props) => {
        const navigate = useNavigate();

        useEffect(() => {
            const token = localStorage.getItem('token');
            if (!token || isTokenExpired(token)) {
                localStorage.removeItem('token');
                navigate('/login');
            }
        }, [navigate]);

        return <Component {...props} />;
    };
};

export default withAuth;
