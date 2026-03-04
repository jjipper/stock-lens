import axios from 'axios';

export const newsAPI = axios.create({
	baseURL: '/news',
});
