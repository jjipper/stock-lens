import axios from 'axios';

export const stocksAPI = axios.create({
	baseURL: '/stocks',
});
