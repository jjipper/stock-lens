import { useSuspenseQuery } from '@tanstack/react-query';

import { getNewsByIds } from '../api/newsAPI';
import { NEWS_QUERY_KEYS } from './queryKeys';

export const useNewsQuery = (newsList: string[]) => {
	return useSuspenseQuery({
		queryKey: NEWS_QUERY_KEYS.newsList(newsList),
		queryFn: () => getNewsByIds(newsList),
	});
};
