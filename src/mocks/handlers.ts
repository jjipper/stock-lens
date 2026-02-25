import { http, HttpResponse } from 'msw';

import { issues } from './data/issues';
import { stocks } from './data/stocks';

export const handlers = [
  http.get('/issues', ({ request }) => {
    const url = new URL(request.url);
    const limit = Number(url.searchParams.get('_limit'));
    const data =
      Number.isFinite(limit) && limit > 0 ? issues.slice(0, limit) : issues;

    return HttpResponse.json(data);
  }),
  http.get('/issues/:id', ({ params }) => {
    const issue = issues.find((item) => item.id === String(params.id));
    if (!issue) {
      return HttpResponse.json(
        { message: '해당 이슈를 찾을 수 없습니다.' },
        { status: 404 }
      );
    }
    return HttpResponse.json(issue);
  }),

  http.get('/stocks', ({ request }) => {
    const url = new URL(request.url);
    const limit = Number(url.searchParams.get('_limit'));
    const data =
      Number.isFinite(limit) && limit > 0 ? stocks.slice(0, limit) : stocks;

    return HttpResponse.json(data);
  }),
  http.get('/stocks/:ticker', ({ params }) => {
    const stock = stocks.find((item) => item.ticker === String(params.id));
    if (!stock) {
      return HttpResponse.json(
        { message: '해당 종목을 찾을 수 없습니다.' },
        { status: 404 }
      );
    }
    return HttpResponse.json(stock);
  }),
];
