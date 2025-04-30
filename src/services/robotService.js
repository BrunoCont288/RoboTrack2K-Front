// src/services/robotService.js
import api from './api';

export const getRobots = async () => {
    try {
        const response = await api.get('/robots');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getRobotById = async (id) => {
    try {
        const response = await api.get(`/robots/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};