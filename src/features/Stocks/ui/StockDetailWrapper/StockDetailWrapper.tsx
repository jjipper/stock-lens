import { useStocksDetailQuery } from 'features/Stocks/hooks/useStocksDetailQuery';
import { useParams } from 'react-router-dom';

import { StockDetailCard } from '../StockDetailCard/StockDetailCard';

export const StockDetailWrapper = () => {
	const { ticker } = useParams();
	const { data: stock } = useStocksDetailQuery(ticker ?? '');

	if (!ticker) return <div>No Stock</div>;

	return <StockDetailCard {...stock} />;
};
