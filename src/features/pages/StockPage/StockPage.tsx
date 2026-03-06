import { TwoColumnGrid } from 'features/layout';
import { StockCard, useStocksQuery } from 'features/Stocks';
import { type FunctionComponent } from 'react';

export const StockPage: FunctionComponent = () => {
	const query = useStocksQuery();

	if (query.isError) return <div>Error: {query.error.message}</div>;
	if (query.data?.length === 0) return <div>No Issues</div>;

	return (
		<TwoColumnGrid>
			{query.data?.map((stock) => (
				<StockCard key={stock.ticker} {...stock} />
			))}
		</TwoColumnGrid>
	);
};

export default StockPage;
