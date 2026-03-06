export const ISSUE_QUERY_KEYS = {
	list: (limit?: number) => (limit ? ['issues', limit] : (['issues'] as const)),
	detail: (id: string) => ['issues', id] as const,
};
