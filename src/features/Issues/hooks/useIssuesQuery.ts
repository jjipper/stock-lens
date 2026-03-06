import { useSuspenseQuery } from '@tanstack/react-query';
import type { IssueCardProps } from 'features/types/types';

import { getIssues } from '../api/issuesAPI';
import { ISSUE_QUERY_KEYS } from './queryKeys';

export const useIssuesQuery = () => {
	return useSuspenseQuery<IssueCardProps[]>({
		queryKey: ISSUE_QUERY_KEYS.list,
		queryFn: getIssues,
	});
};
