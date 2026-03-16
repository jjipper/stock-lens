import axios from 'axios';
import type {
	InfinityProps,
	IssueCardProps,
	IssueInfinityProps,
} from 'features/types/types';

export const issuesAPI = axios.create({
	baseURL: '/issues',
});

export const getIssues = async (limit?: number) => {
	const res = await issuesAPI.get<IssueCardProps[]>('/', {
		params: { _limit: limit },
	});
	return res.data;
};

export const getIssuesInfinity = async ({
	pageParam,
}: {
	pageParam: InfinityProps;
}) => {
	const { size, page } = pageParam;
	const res = await issuesAPI.get<IssueInfinityProps>('/', {
		params: {
			_limit: size,
			_page: page,
		},
	});
	return res.data;
};

export const getIssueDetail = async (id: string) => {
	const res = await issuesAPI.get<IssueCardProps>(`/${id}`);
	return res.data;
};
