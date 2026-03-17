import { http, HttpResponse } from 'msw';

import { stocks } from '../data/stocks';

export const stocksHandlers = [
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
];
