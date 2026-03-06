import { SectionHeader, SectionWrapper, TwoColumnGrid } from 'features/layout';
import { StockCard, useStocksQuery } from 'features/Stocks';
import type { StockCardProps } from 'features/types/types';
import type { FunctionComponent } from 'react';

export const MyStockSection: FunctionComponent = () => {
	const { data: stocks } = useStocksQuery((data: StockCardProps[]) =>
		data.filter((item) => item.myStock).slice(0, 4),
	);

	return (
		<SectionWrapper>
			<SectionHeader title="My Stocks" />

			<TwoColumnGrid>
				{stocks.map((stock) => (
					<StockCard key={stock.ticker} {...stock} />
				))}
			</TwoColumnGrid>
		</SectionWrapper>
	);
};
