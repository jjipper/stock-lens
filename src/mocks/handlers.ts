import { http, HttpResponse } from 'msw';

import { issues } from './data/issues';
import { news } from './data/news';
import { stocks } from './data/stocks';

export const handlers = [
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

	// 주식 목록
	http.get('/stocks', ({ request }) => {
		const url = new URL(request.url);
		const limit = Number(url.searchParams.get('_limit'));
		const data =
			Number.isFinite(limit) && limit > 0 ? stocks.slice(0, limit) : stocks;
		return HttpResponse.json(data);
	}),
	// 주식 단건 조회
	http.get('/stocks/:ticker', ({ params }) => {
		const stock = stocks.find((item) => item.ticker === String(params.ticker));
		if (!stock) {
			return HttpResponse.json(
				{ message: '해당 종목을 찾을 수 없습니다.' },
				{ status: 404 },
			);
		}
		return HttpResponse.json(stock);
	}),

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
