import { useSuspenseQuery } from '@tanstack/react-query';

import { getStocks } from '../api/stocksAPI';
import { STOCK_QUERY_KEYS } from './queryKeys';

export const useStocksQuery = (select?) => {
	return useSuspenseQuery({
		queryKey: STOCK_QUERY_KEYS.list,
		queryFn: getStocks,
		select,
	});
};
