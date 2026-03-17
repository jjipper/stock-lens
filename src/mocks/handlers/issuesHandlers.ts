import { http, HttpResponse } from 'msw';

import { issues } from '../data/issues';

export const issuesHandlers = [
	// 이슈 목록
	http.get('/issues', ({ request }) => {
		const url = new URL(request.url);
		const limit = Number(url.searchParams.get('_limit'));
		const data =
			Number.isFinite(limit) && limit > 0 ? issues.slice(0, limit) : issues;
		return HttpResponse.json(data);
	}),
	// 이슈 무한 스크롤 조회
	http.get('/issues/infinity', ({ request }) => {
		const url = new URL(request.url);
		const size = Number(url.searchParams.get('_limit'));
		const page = Number(url.searchParams.get('_page'));
		const start = size * (page - 1);
		const end = start + size;
		const data = {
			list: [
				...(Number.isFinite(size) && size > 0
					? issues.slice(start, end)
					: issues),
			],
			hasNextPage: end < issues.length,
		};
		return HttpResponse.json(data);
	}),
	// 이슈 단건 조회
	http.get('/issues/:id', ({ params }) => {
		const issue = issues.find((item) => item.id === String(params.id));
		if (!issue) {
			return HttpResponse.json(
				{ message: '해당 이슈를 찾을 수 없습니다.' },
				{ status: 404 },
			);
		}
		return HttpResponse.json(issue);
	}),
];
