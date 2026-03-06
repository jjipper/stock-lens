export const ISSUE_QUERY_KEYS = {
	list: ['issues'] as const,
	detail: (id: string) => ['issues', id] as const,
};
