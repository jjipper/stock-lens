import { SectionHeader, TwoColumnGrid } from 'features/layout';
import { newsAPI } from 'features/News';
import { NewsCard } from 'features/News/NewsCard/NewsCard';
import { NewsModal } from 'features/News/NewsModal/NewsModal';
import { StockDetailCard, stocksAPI } from 'features/Stocks';
import type { NewsItem, StockCardProps } from 'features/types/types';
import { type FunctionComponent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const StockDetailPage: FunctionComponent = () => {
	const { ticker } = useParams();
	const [newsList, setNewsList] = useState<NewsItem[]>([]);
	const [stock, setStock] = useState<StockCardProps | null>(null);
	const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

	useEffect(() => {
		if (!ticker) return;

		const fetchData = async () => {
			const stockData: StockCardProps = (await stocksAPI(`/${ticker}`)).data;
			setStock(stockData);

			const query = encodeURIComponent(stockData.newsList.join(','));

			// ids로 해당하는 뉴스 목록 받아오기
			const newsData = (await newsAPI(`?ids=${query}`)).data;
			setNewsList(newsData);
		};

		fetchData();
	}, [ticker]);

	const handleNewsClick = (news: NewsItem) => {
		setSelectedNews(news);
	};

	return (
		<div className="w-full">
			{stock && <StockDetailCard {...stock} />}
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
