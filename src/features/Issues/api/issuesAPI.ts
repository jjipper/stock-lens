import axios from 'axios';

export const issuesAPI = axios.create({
	baseURL: '/issues',
});

export const getIssues = async () => {
	const res = await issuesAPI.get('/');
	return res.data;
};
