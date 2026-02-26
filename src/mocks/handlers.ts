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
	// 이슈 관련 뉴스 목록
	http.get('/issues/:id/news', ({ params }) => {
		const issue = issues.find((item) => item.id === String(params.id));
		if (!issue) {
			return HttpResponse.json(
				{ message: '해당 이슈를 찾을 수 없습니다.' },
				{ status: 404 },
			);
		}
		return HttpResponse.json(issue.newsList ?? []);
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
	// 주식 관련 뉴스 목록
	http.get('/stocks/:ticker/news', ({ params }) => {
		const stock = stocks.find((item) => item.ticker === String(params.ticker));
		if (!stock) {
			return HttpResponse.json(
				{ message: '해당 종목을 찾을 수 없습니다.' },
				{ status: 404 },
			);
		}
		return HttpResponse.json(stock.newsList ?? []);
	}),
];
