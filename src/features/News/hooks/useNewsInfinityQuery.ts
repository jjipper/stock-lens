import { useSuspenseInfiniteQuery } from '@tanstack/react-query';

import { getNewsInfinityByIds } from '../api/newsAPI';
import { NEWS_QUERY_KEYS } from './queryKeys';

export const useNewsInfinityQuery = (newsList: string[]) => {
	return useSuspenseInfiniteQuery({
		queryKey: [NEWS_QUERY_KEYS.newsListInfinity],
		queryFn: ({ pageParam }) => getNewsInfinityByIds({ newsList, pageParam }),
		initialPageParam: { size: 4, page: 1 },
		getNextPageParam: (lastPage, allPages) => {
			if (!lastPage.hasNextPage) return undefined;
			return { size: 4, page: allPages.length + 1 };
		},
	});
};
