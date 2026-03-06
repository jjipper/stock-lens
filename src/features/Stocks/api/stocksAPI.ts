import axios from 'axios';

export const stocksAPI = axios.create({
	baseURL: '/stocks',
});

export const getStocks = async () => {
	const res = await stocksAPI.get('/');
	return res.data;
};

export const getStockDetail = async (ticker: string) => {
	const res = await stocksAPI.get(`/${ticker}`);
	return res.data;
};
