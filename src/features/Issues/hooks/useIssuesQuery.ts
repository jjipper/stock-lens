import { useSuspenseQuery } from '@tanstack/react-query';

import { getIssues } from '../api/issuesAPI';
import { ISSUE_QUERY_KEYS } from './queryKeys';

export const useIssuesQuery = (limit?: number) => {
	return useSuspenseQuery({
		queryKey: ISSUE_QUERY_KEYS.list(limit),
		queryFn: () => getIssues(limit),
	});
};
