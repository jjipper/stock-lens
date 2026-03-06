import { useSuspenseQuery } from '@tanstack/react-query';
import type { IssueCardProps } from 'features/types/types';

import { getIssueDetail } from '../api/issuesAPI';
import { ISSUE_QUERY_KEYS } from './queryKeys';

export const useIssueDetailQuery = (id: string) => {
	return useSuspenseQuery<IssueCardProps>({
		queryKey: ISSUE_QUERY_KEYS.detail(id),
		queryFn: () => getIssueDetail(id),
	});
};
