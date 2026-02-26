import { NotFoundPage, SectionHeader, TwoColumnGrid } from 'features/layout';
import { NewsCard } from 'features/News/NewsCard/NewsCard';
import { StockDetailCard } from 'features/Stocks';
import type {
	AppBarOutletContext,
	NewsListItem,
	StockCardProps,
} from 'features/types/types';
import { type FunctionComponent, useEffect, useState } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';

export const StockDetailPage: FunctionComponent = () => {
	const { ticker } = useParams();
	const [newsList, setNewsList] = useState<NewsListItem[]>([]);
	const [stock, setStock] = useState<StockCardProps | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (!ticker) return;

		setIsLoading(true);
		setError(null);

		(async () => {
			try {
				// 주식 정보 받아오기
				const stockRes = await fetch(`/stocks/${ticker}`);
				if (!stockRes.ok) throw new Error(`주식 요청 실패: ${stockRes.status}`);
				const stockData = (await stockRes.json()) as StockCardProps;
				setStock(stockData);

				// 주식에 맞는 뉴스 id 배열 받아오기
				const idsRes = await fetch(`/stocks/${ticker}/news`);
				if (!idsRes.ok)
					throw new Error(`뉴스 ID 목록 요청 실패: ${idsRes.status}`);
				const ids = (await idsRes.json()) as string[];

				if (ids.length === 0) {
					setNewsList([]);
					return;
				}

				const query = encodeURIComponent(ids.join(','));

				// ids로 해당하는 뉴스 목록 받아오기
				const newsRes = await fetch(`/news?ids=${query}`);
				if (!newsRes.ok) throw new Error(`뉴스 요청 실패: ${newsRes.status}`);
				const newsData = (await newsRes.json()) as NewsListItem[];
				setNewsList(newsData);
			} catch (err: unknown) {
				setError(
					err instanceof Error
						? err.message
						: '알 수 없는 오류가 발생했습니다.',
				);
			} finally {
				setIsLoading(false);
			}
		})();
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
			<div className="mt-6">
				<SectionHeader title="최신 뉴스" updateTime="2시간 전" />
				<div className="mt-2">
					<TwoColumnGrid>
						{newsList.map((news) => {
							return (
								<NewsCard
									key={news.id}
									imageUrl={news.imageUrl}
									title={news.title}
									source={news.source}
									publishedAt={news.publishedAt}
								/>
							);
						})}
					</TwoColumnGrid>
				</div>
			</div>
		</div>
	);
};

export default StockDetailPage;
