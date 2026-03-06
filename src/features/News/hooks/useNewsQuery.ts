import { useSuspenseQuery } from '@tanstack/react-query';
import type { NewsListItem } from 'features/types/types';

import { getNewsByIds } from '../api/newsAPI';
import { NEWS_QUERY_KEYS } from './queryKeys';

export const useNewsQuery = (newsList: string[]) => {
	return useSuspenseQuery<NewsListItem[]>({
		queryKey: NEWS_QUERY_KEYS.newsList(newsList),
		queryFn: () => getNewsByIds(newsList),
	});
};
