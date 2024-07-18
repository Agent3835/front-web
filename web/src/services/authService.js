import axios from 'axios';

const API_URL = 'https://localhost:7250/api/Users';

const login = async (email, password) => {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};

const logout = () => {
    localStorage.removeItem('user');
};

const getCurrentUser = () => {
    //Descomentar para admin view
    // return {
    //     username: 'admin',
    //     role: 'admin',
    //     token: 'fake-jwt-token'
    // };
    return JSON.parse(localStorage.getItem('user'));
};

export default {
    login,
    logout,
    getCurrentUser,
};
