import axios from 'axios';

export const issuesAPI = axios.create({
	baseURL: '/issues',
});

export const getIssues = async (limit?: number) => {
	const res = await issuesAPI.get('/', {
		params: { _limit: limit },
	});
	return res.data;
};

export const getIssueDetail = async (id: string) => {
	const res = await issuesAPI.get(`/${id}`);
	return res.data;
};
