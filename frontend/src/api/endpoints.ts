import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/';
const GET_URL = `${BASE_URL}events`;

export const get_events = async () => {
    const response = await axios.get(GET_URL);
    return response.data;
}

export const get_event = async (id: number) => {
    const response = await axios.get(`${GET_URL}/${id}`);
    return response.data;
}

export const get_event_images = async (id: number) => {
    const response = await axios.get(`${GET_URL}/${id}/images`);
    return response.data;
}