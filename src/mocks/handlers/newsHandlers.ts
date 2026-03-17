import { http, HttpResponse } from 'msw';

import { news } from '../data/news';

export const newsHandlers = [
	// 뉴스 목록
	http.get('/news', ({ request }) => {
		const url = new URL(request.url);

		const idsParams = url.searchParams.get('ids');
		const ids = idsParams
			? idsParams
					.split(',')
					.map((v) => v.trim())
					.filter(Boolean)
			: null;

		const data = ids
			? news.filter((item) => ids.includes(String(item.id)))
			: news;

		return HttpResponse.json(data);
	}),
	// 뉴스 단건 조회
	http.get('/news/:id', ({ params }) => {
		const newsDetail = news.find((item) => item.id === String(params.id));
		if (!newsDetail) {
			return HttpResponse.json(
				{ message: '해당 뉴스를 찾을 수 없습니다.' },
				{ status: 404 },
			);
		}
		return HttpResponse.json(newsDetail);
	}),
];
