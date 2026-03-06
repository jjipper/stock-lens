import { useSuspenseQuery } from '@tanstack/react-query';
import type { StockCardProps } from 'features/types/types';

import { getStockDetail } from '../api/stocksAPI';
import { STOCK_QUERY_KEYS } from './queryKeys';

export const useStocksDetailQuery = (ticker: string) => {
	return useSuspenseQuery<StockCardProps>({
		queryKey: STOCK_QUERY_KEYS.detail(ticker),
		queryFn: () => getStockDetail(ticker),
	});
};
