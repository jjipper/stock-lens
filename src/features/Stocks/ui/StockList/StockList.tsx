import { TwoColumnGrid } from 'features/layout';
import { StockCard, useStocksQuery } from 'features/Stocks';
import { type FunctionComponent } from 'react';

export const StockList: FunctionComponent = () => {
	const { data } = useStocksQuery();

	if (data.length === 0) return <div>No Issues</div>;

	return (
		<TwoColumnGrid>
			{data.map((stock) => (
				<StockCard key={stock.ticker} {...stock} />
			))}
		</TwoColumnGrid>
	);
};
