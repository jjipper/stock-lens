import { SectionHeader, SectionWrapper, TwoColumnGrid } from 'features/layout';
import { StockCard, useStocksQuery } from 'features/Stocks';
import type { StockCardProps } from 'features/types/types';
import type { FunctionComponent } from 'react';

export const PopularStocksSection: FunctionComponent = () => {
	const { data: stocks } = useStocksQuery((data: StockCardProps[]) =>
		data.filter((item) => item.popular).slice(0, 6),
	);

	return (
		<SectionWrapper>
			<SectionHeader title="Today's Popular Stocks" />

			<TwoColumnGrid>
				{stocks.map((stock) => (
					<StockCard key={stock.ticker} {...stock} />
				))}
			</TwoColumnGrid>
		</SectionWrapper>
	);
};
