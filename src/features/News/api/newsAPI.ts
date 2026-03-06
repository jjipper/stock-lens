import axios from 'axios';

export const newsAPI = axios.create({
	baseURL: '/news',
});

export const getNewsByIds = async (newsList: string[]) => {
	const res = await newsAPI.get(
		`?ids=${encodeURIComponent(newsList.join(','))}`,
	);
	return res.data;
};

export const getNewsById = async (id: string) => {
	const res = await newsAPI.get(`/${id}`);
	return res.data;
};
