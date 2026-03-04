import { IssueDetailCard, issuesAPI } from 'features/Issues';
import { SectionHeader, TwoColumnGrid } from 'features/layout';
import { newsAPI } from 'features/News';
import { NewsCard } from 'features/News/NewsCard/NewsCard';
import { NewsModal } from 'features/News/NewsModal/NewsModal';
import type { IssueCardProps, NewsItem } from 'features/types/types';
import { type FunctionComponent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const IssueDetailPage: FunctionComponent = () => {
	const { id } = useParams();
	const [newsList, setNewsList] = useState<NewsItem[]>([]);
	const [issue, setIssue] = useState<IssueCardProps | null>(null);
	const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

	useEffect(() => {
		if (!id) return;

		const fetchData = async () => {
			const issueData: IssueCardProps = (await issuesAPI(`/${id}`)).data;
			setIssue(issueData);

			const query = encodeURIComponent(issueData.newsList.join(','));

			// ids로 해당하는 뉴스 목록 받아오기
			const newsData = (await newsAPI(`?ids=${query}`)).data;
			setNewsList(newsData);
		};

		fetchData();
	}, [id]);

	const handleNewsClick = (news: NewsItem) => {
		setSelectedNews(news);
	};

	return (
		<>
			<div className="w-full">
				<ul className="flex flex-col gap-4">
					{issue && <IssueDetailCard {...issue} />}
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
									onClick={() => handleNewsClick(news)}
								/>
							);
						})}
					</TwoColumnGrid>
				</div>
			</div>
			{selectedNews && (
				<NewsModal
					news={selectedNews}
					onClose={() => {
						setSelectedNews(null);
					}}
				/>
			)}
		</>
	);
};
