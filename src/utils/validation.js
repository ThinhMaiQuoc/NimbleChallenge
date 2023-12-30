export const validateUserData = (userData) => {
    let errors = {};

    if (!userData.username.trim()) {
        errors.username = 'Username is required';
    }
    if (!userData.email.trim()) {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
        errors.email = 'Email address is invalid';
    }
    if (!userData.password) {
        errors.password = 'Password is required';
    }

    return errors
};

export const validateCredentials = (credentials) => {
    let errors = {};

    if (!credentials.email.trim()) {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(credentials.email)) {
        errors.email = 'Email address is invalid';
    }
    if (!credentials.password) {
        errors.password = 'Password is required';
    }

    return errors
};