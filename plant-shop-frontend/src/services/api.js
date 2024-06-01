import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const getPlants = async () => {
    const response = await axios.get(`${API_URL}/plants`);
    return response.data;
};

export const createPlant = async (plant) => {
    const response = await axios.post(`${API_URL}/plants`, plant);
    return response.data;
};

export const updatePlant = async (id, plant) => {
    const response = await axios.put(`${API_URL}/plants/${id}`, plant);
    return response.data;
};

export const deletePlant = async (id) => {
    const response = await axios.delete(`${API_URL}/plants/${id}`);
    return response.data;
};

export const getPlantById = async (id) => {
    const response = await axios.get(`${API_URL}/plants/${id}`);
    return response.data;
};