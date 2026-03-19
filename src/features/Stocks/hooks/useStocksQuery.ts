import { useSuspenseQuery } from '@tanstack/react-query';
import type { StockCardProps } from 'features/types/types';

import { getStocks } from '../api/stocksAPI';
import { STOCK_QUERY_KEYS } from './queryKeys';

export const useStocksQuery = <TSelected = StockCardProps[]>(
	select?: (data: StockCardProps[]) => TSelected,
) => {
	return useSuspenseQuery({
		queryKey: STOCK_QUERY_KEYS.list,
		queryFn: getStocks,
		select,
	});
};
