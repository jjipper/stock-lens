import axios from 'axios';

export const stocksAPI = axios.create({
	baseURL: '/stocks',
});

export const getStocks = async () => {
	const res = await stocksAPI.get('/');
	return res.data;
};
