// src/services/authService.js
import api from './api';

export const login = async (email, password) => {
    try {
        const response = await api.post('/auth/login', { email, password });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const logout = async () => {
    try {
        await api.post('/auth/logout');
    } catch (error) {
        throw error;
    }
};