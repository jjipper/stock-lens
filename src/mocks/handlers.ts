import { http, HttpResponse } from 'msw';

import { issues } from './data/issues';
import { stocks } from './data/stocks';

export const handlers = [
  http.get('/issues', ({ request }) => {
    const url = new URL(request.url);
    const limit = Number(url.searchParams.get('_limit'));
    const data = Number.isFinite(limit) && limit > 0 ? issues.slice(0, limit) : issues;

    return HttpResponse.json(data);
  }),
  http.get('/stocks', ({ request }) => {
    const url = new URL(request.url);
    const limit = Number(url.searchParams.get('_limit'));
    const data = Number.isFinite(limit) && limit > 0 ? stocks.slice(0, limit) : stocks;

    return HttpResponse.json(data);
  }),
];
