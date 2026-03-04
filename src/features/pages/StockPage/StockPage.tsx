import { TwoColumnGrid } from 'features/layout';
import { StockCard, stocksAPI } from 'features/Stocks';
import type { StockCardProps } from 'features/types/types';
import { type FunctionComponent, useEffect, useState } from 'react';

export const StockPage: FunctionComponent = () => {
	const [stocks, setStocks] = useState<StockCardProps[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const stocksList = (await stocksAPI('/')).data;
			setStocks(stocksList);
		};

		fetchData();
	}, []);

	return (
		<TwoColumnGrid>
			{stocks.map((stock) => (
				<StockCard key={stock.ticker} {...stock} />
			))}
		</TwoColumnGrid>
	);
};
