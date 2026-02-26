import { NotFoundPage } from 'features/layout';
import { StockDetailCard } from 'features/Stocks';
import type {
	AppBarOutletContext,
	StockDetailCardProps,
} from 'features/types/types';
import { type FunctionComponent,useEffect, useState } from 'react';
import { useOutletContext,useParams } from 'react-router-dom';

export const StockDetailPage: FunctionComponent = () => {
	const { ticker } = useParams();
	const [stock, setStock] = useState<StockDetailCardProps | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (!ticker) return;

		fetch(`/stocks/${ticker}`)
			.then((res) => {
				if (!res.ok) {
					throw new Error(`요청 실패: ${res.status}`);
				}
				return res.json() as Promise<StockDetailCardProps>;
			})
			.then((data) => {
				setStock(data);
			})
			.catch((err: unknown) => {
				setError(
					err instanceof Error
						? err.message
						: '알 수 없는 오류가 발생했습니다.',
				);
			})
			.finally(() => setIsLoading(false));
	}, [ticker]);

	// app bar Layout 타이틀 설정
	const { setAppBarTitle } = useOutletContext<AppBarOutletContext>();

	useEffect(() => {
		setAppBarTitle(`${stock?.name}`);
	}, [stock, setAppBarTitle]);

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;
	if (!stock) return <NotFoundPage />;

	return (
		<div className="w-full">
			<StockDetailCard {...stock} />
		</div>
	);
};

export default StockDetailPage;
