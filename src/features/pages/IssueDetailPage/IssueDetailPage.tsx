import { IssueDetailCard, useIssueDetailQuery } from 'features/Issues';
import { SectionHeader, TwoColumnGrid } from 'features/layout';
import { useNewsQuery } from 'features/News';
import { useNewsDetailQuery } from 'features/News/hooks/useNewsDetailQuery';
import { NewsCard } from 'features/News/NewsCard/NewsCard';
import { NewsModal } from 'features/News/NewsModal/NewsModal';
import { type FunctionComponent, useState } from 'react';
import { useParams } from 'react-router-dom';

export const IssueDetailPage: FunctionComponent = () => {
	const { id } = useParams();
	const [selectedNews, setSelectedNews] = useState('');
	const { data: issue } = useIssueDetailQuery(id ?? '');
	const { data: newsList } = useNewsQuery(issue.newsList);
	const { data: newsItem } = useNewsDetailQuery(selectedNews);

	if (!id) return <div>No Issue</div>;

	return (
		<>
			<div className="w-full">
				<ul className="flex flex-col gap-4">
					<IssueDetailCard {...issue} />
				</ul>

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

export default IssueDetailPage;
