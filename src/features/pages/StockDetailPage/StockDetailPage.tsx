import { SectionHeader, TwoColumnGrid } from 'features/layout';
import { useNewsQuery } from 'features/News';
import { useNewsDetailQuery } from 'features/News/hooks/useNewsDetailQuery';
import { NewsCard } from 'features/News/NewsCard/NewsCard';
import { NewsModal } from 'features/News/NewsModal/NewsModal';
import { StockDetailCard } from 'features/Stocks';
import { useStocksDetailQuery } from 'features/Stocks/hooks/useStocksDetailQuery';
import { type FunctionComponent, useState } from 'react';
import { useParams } from 'react-router-dom';

export const StockDetailPage: FunctionComponent = () => {
	const { ticker } = useParams();
	const [selectedNews, setSelectedNews] = useState('');
	const { data: stock } = useStocksDetailQuery(ticker ?? '');
	const { data: newsList } = useNewsQuery(stock.newsList);
	const { data: newsItem } = useNewsDetailQuery(selectedNews);

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
								onClick={() => setSelectedNews(news.id)}
							/>
						);
					})}
				</TwoColumnGrid>
			</div>
			{newsItem && (
				<NewsModal
					news={newsItem}
					onClose={() => {
						setSelectedNews('');
					}}
				/>
			)}
		</div>
	);
};

export default StockDetailPage;
