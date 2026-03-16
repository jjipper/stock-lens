import { useSuspenseInfiniteQuery } from '@tanstack/react-query';

import { getIssuesInfinity } from '../api/issuesAPI';
import { ISSUE_QUERY_KEYS } from './queryKeys';

export const useIssuesInfinityQuery = () => {
	return useSuspenseInfiniteQuery({
		queryKey: [ISSUE_QUERY_KEYS.infinity],
		queryFn: getIssuesInfinity,
		initialPageParam: { size: 5, page: 1 },
		getNextPageParam: (lastPage, allPages) => {
			if (!lastPage.hasNextPage) return undefined;
			return { size: 5, page: allPages.length + 1 };
		},
	});
};
