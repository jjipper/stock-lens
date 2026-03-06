import { useQuery } from '@tanstack/react-query';
import type { NewsItem } from 'features/types/types';

import { getNewsById } from '../api/newsAPI';
import { NEWS_QUERY_KEYS } from './queryKeys';

export const useNewsDetailQuery = (id: string) => {
	return useQuery<NewsItem>({
		queryKey: NEWS_QUERY_KEYS.newsItem(id),
		queryFn: () => getNewsById(id),
		enabled: !!id,
	});
};
