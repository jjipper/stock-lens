import { useIssueDetailQuery } from 'features/Issues';
import { SectionHeader, TwoColumnGrid } from 'features/layout';
import { NewsCard, NewsModal, useNewsDetailQuery } from 'features/News';
import { useNewsInfinityQuery } from 'features/News/hooks/useNewsInfinityQuery';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export const IssueNewsListWrapper = () => {
	const { id } = useParams();
	const [selectedNews, setSelectedNews] = useState('');
	const { data: issue } = useIssueDetailQuery(id ?? '');
	const {
		data: { pages },
	} = useNewsInfinityQuery(issue.newsList);
	const { data: newsItem } = useNewsDetailQuery(selectedNews);

	const newsList = pages.flatMap((page) => page.list);

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
		</>
	);
};
