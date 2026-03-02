import { SectionEmpty, TwoColumnGrid } from 'features/layout';
import { StockCard } from 'features/Stocks';
import type { StockCardProps } from 'features/types/types';
import { type FunctionComponent, useEffect, useState } from 'react';

export const StockPage: FunctionComponent = () => {
	// 주식 목록 렌더링
	const [stocks, setStocks] = useState<StockCardProps[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		fetch('/stocks')
			.then((res) => {
				if (!res.ok) {
					throw new Error(`요청 실패: ${res.status}`);
				}
				return res.json() as Promise<StockCardProps[]>;
			})
			.then((data) => {
				return setStocks(data);
			})
			.catch((err: unknown) => {
				setError(
					err instanceof Error
						? err.message
						: '알 수 없는 오류가 발생했습니다.',
				);
			})
			.finally(() => setIsLoading(false));
	}, []);

	// 로딩, 에러, 404 분기
	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;
	if (setStocks.length === 0) return <SectionEmpty />;

	return (
		<TwoColumnGrid>
			{stocks.map((stock) => (
				<StockCard key={stock.ticker} {...stock} />
			))}
		</TwoColumnGrid>
	);
};
