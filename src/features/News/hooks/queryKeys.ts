export const NEWS_QUERY_KEYS = {
	newsList: (newsList: string[]) => ['news', newsList] as const,
};
