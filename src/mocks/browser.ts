import { setupWorker } from 'msw/browser';

import { issuesHandlers } from './handlers/issuesHandlers';
import { newsHandlers } from './handlers/newsHandlers';
import { stocksHandlers } from './handlers/stocksHandlers';

export const worker = setupWorker(
	...issuesHandlers,
	...stocksHandlers,
	...newsHandlers,
);
