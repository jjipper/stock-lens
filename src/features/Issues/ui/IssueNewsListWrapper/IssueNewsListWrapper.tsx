import { useIssueDetailQuery } from 'features/Issues';
import { SectionHeader, TwoColumnGrid } from 'features/layout';
import { NewsCard, NewsModal, useNewsDetailQuery } from 'features/News';
import { useNewsInfinityQuery } from 'features/News/hooks/useNewsInfinityQuery';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

export const IssueNewsListWrapper = () => {
	const { id } = useParams();
	const [selectedNews, setSelectedNews] = useState('');
	const { data: issue } = useIssueDetailQuery(id ?? '');
	const {
		data: { pages },
		hasNextPage,
		fetchNextPage,
	} = useNewsInfinityQuery(issue.newsList);
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
			<section className="motion-fade-up rounded-panel shadow-card mt-2 flex flex-col gap-4 border border-white/75 bg-white/78 p-5 backdrop-blur-sm sm:p-6">
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
					<p className="text-sm text-slate-500">No relevant news available.</p>
				)}
			</section>
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
