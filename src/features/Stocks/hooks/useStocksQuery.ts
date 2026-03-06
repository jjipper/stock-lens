import { useSuspenseQuery } from '@tanstack/react-query';
import type { StockCardProps } from 'features/types/types';

import { getStocks } from '../api/stocksAPI';
import { STOCK_QUERY_KEYS } from './queryKeys';

export const useStocksQuery = () => {
	return useSuspenseQuery<StockCardProps[]>({
		queryKey: STOCK_QUERY_KEYS.list,
		queryFn: getStocks,
	});
};
