import { useIssueDetailQuery } from 'features/Issues';
import { SectionHeader, TwoColumnGrid } from 'features/layout';
import {
	NewsCard,
	NewsModal,
	useNewsDetailQuery,
	useNewsQuery,
} from 'features/News';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export const NewsListWrapper = () => {
	const { id } = useParams();
	const [selectedNews, setSelectedNews] = useState('');
	const { data: issue } = useIssueDetailQuery(id ?? '');
	const { data: newsList } = useNewsQuery(issue.newsList);
	const { data: newsItem } = useNewsDetailQuery(selectedNews);

	if (!id) return <div>No Issue</div>;

	return (
		<>
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
		</>
	);
};
