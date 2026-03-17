export const NEWS_QUERY_KEYS = {
	newsList: (newsList: string[]) => ['news', newsList] as const,
	newsListInfinity: ['news', 'infinity'] as const,
	newsItem: (id: string) => ['news', id] as const,
};
