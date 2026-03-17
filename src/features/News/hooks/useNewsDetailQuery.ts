import { useQuery } from '@tanstack/react-query';

import { getNewsById } from '../api/newsAPI';
import { NEWS_QUERY_KEYS } from './queryKeys';

export const useNewsDetailQuery = (id: string) => {
	return useQuery({
		queryKey: NEWS_QUERY_KEYS.newsItem(id),
		queryFn: () => getNewsById(id),
		enabled: !!id,
	});
};
