import { SectionHeader, TwoColumnGrid } from 'features/layout';
import { NewsCard, NewsModal, useNewsDetailQuery } from 'features/News';
import { useNewsInfinityQuery } from 'features/News/hooks/useNewsInfinityQuery';
import { useStocksDetailQuery } from 'features/Stocks';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

export const StockNewsListWrapper = () => {
	const { ticker } = useParams();
	const [selectedNews, setSelectedNews] = useState('');
	const { data: stock } = useStocksDetailQuery(ticker ?? '');
	const {
		data: { pages },
		hasNextPage,
		fetchNextPage,
	} = useNewsInfinityQuery(stock.newsList);
	const { data: newsItem } = useNewsDetailQuery(selectedNews);

	const observerRef = useRef<HTMLDivElement>(null);

	const newsList = pages.flatMap((page) => page.list);

	useEffect(() => {
		if (!observerRef.current) return;

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && hasNextPage) {
					fetchNextPage();
				}
			});
		});

		observer.observe(observerRef.current);
		return () => {
			observer.disconnect();
		};
	}, [hasNextPage, fetchNextPage]);

	return (
		<>
			<div className="mt-6 flex flex-col gap-3">
				<SectionHeader title="최신 뉴스" updateTime="2시간 전" />
				{newsList ? (
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
				) : (
					<p>'No relevant news available.'</p>
				)}
			</div>
			{newsItem && (
				<NewsModal
					news={newsItem}
					onClose={() => {
						setSelectedNews('');
					}}
				/>
			)}
			{hasNextPage && <div ref={observerRef} />}
		</>
	);
};
