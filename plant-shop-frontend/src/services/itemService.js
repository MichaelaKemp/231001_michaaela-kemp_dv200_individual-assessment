import axios from 'axios';

const API_URL = 'http://localhost:3001/plants';

export const getItems = async (page, limit) => {
    const response = await axios.get(`${API_URL}?page=${page}&limit=${limit}`);
    return response.data;
};

export const getItem = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};