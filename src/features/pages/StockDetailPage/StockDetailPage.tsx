import { SectionHeader, TwoColumnGrid } from 'features/layout';
import { NewsCard } from 'features/News/NewsCard/NewsCard';
import { NewsModal } from 'features/News/NewsModal/NewsModal';
import { Loading } from 'features/shared';
import { StockDetailCard } from 'features/Stocks';
import type { NewsItem, StockCardProps } from 'features/types/types';
import { type FunctionComponent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const StockDetailPage: FunctionComponent = () => {
	const { ticker } = useParams();
	const [newsList, setNewsList] = useState<NewsItem[]>([]);
	const [stock, setStock] = useState<StockCardProps | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

	useEffect(() => {
		if (!ticker) return;

		const fetchData = async () => {
			try {
				// 주식 정보 받아오기
				const stockRes = await fetch(`/stocks/${ticker}`);
				if (!stockRes.ok) throw new Error(`주식 요청 실패: ${stockRes.status}`);
				const stockData = (await stockRes.json()) as StockCardProps;
				setStock(stockData);

				const query = encodeURIComponent(stockData.newsList.join(','));

				// ids로 해당하는 뉴스 목록 받아오기
				const newsRes = await fetch(`/news?ids=${query}`);
				if (!newsRes.ok) throw new Error(`뉴스 요청 실패: ${newsRes.status}`);
				const newsData = (await newsRes.json()) as NewsItem[];
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
		};

		fetchData();
	}, [ticker]);

	if (isLoading) return <Loading />;
	if (error) return <div>Error: {error}</div>;
	if (!stock) return <div>No Stock</div>;

	const handleNewsClick = (news: NewsItem) => {
		setSelectedNews(news);
	};

	return (
		<div className="w-full">
			<StockDetailCard {...stock} />
			<div className="mt-6 flex flex-col gap-3">
				<SectionHeader title="최신 뉴스" updateTime="2시간 전" />
				<TwoColumnGrid>
					{newsList.map((news) => {
						return (
							<NewsCard
								key={news.id}
								imageUrl={news.imageUrl}
								title={news.title}
								source={news.source}
								publishedAt={news.publishedAt}
								onClick={() => handleNewsClick(news)}
							/>
						);
					})}
				</TwoColumnGrid>
			</div>
			{selectedNews && (
				<NewsModal
					news={selectedNews}
					onClose={() => {
						setSelectedNews(null);
					}}
				/>
			)}
		</div>
	);
};

export default StockDetailPage;
