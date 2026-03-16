import axios from 'axios';
import type { StockCardProps } from 'features/types/types';

export const stocksAPI = axios.create({
	baseURL: '/stocks',
});

export const getStocks = async () => {
	const res = await stocksAPI.get<StockCardProps[]>('/');
	return res.data;
};

export const getStockDetail = async (ticker: string) => {
	const res = await stocksAPI.get<StockCardProps>(`/${ticker}`);
	return res.data;
};
