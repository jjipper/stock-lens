import axios from 'axios';
import type {
	NewsInfinityProps,
	NewsListInfinityProps,
} from 'features/types/types';

export const newsAPI = axios.create({
	baseURL: '/news',
});

export const getNewsByIds = async (newsList: string[]) => {
	const res = await newsAPI.get(
		`?ids=${encodeURIComponent(newsList.join(','))}`,
	);
	return res.data;
};

export const getNewsInfinityByIds = async ({
	newsList,
	pageParam,
}: NewsInfinityProps) => {
	const { size, page } = pageParam;
	const res = await newsAPI.get<NewsListInfinityProps>(
		`?ids=${encodeURIComponent(newsList.join(','))}&_limit=${size}&_page=${page}`,
	);
	return res.data;
};

export const getNewsById = async (id: string) => {
	const res = await newsAPI.get(`/${id}`);
	return res.data;
};
