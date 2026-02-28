import { IssueDetailCard } from 'features/Issues';
import { SectionHeader, TwoColumnGrid } from 'features/layout';
import { NewsCard } from 'features/News/NewsCard/NewsCard';
import { NewsModal } from 'features/News/NewsModal/NewsModal';
import { Loading } from 'features/shared';
import type { IssueCardProps, NewsItem } from 'features/types/types';
import { type FunctionComponent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const IssueDetailPage: FunctionComponent = () => {
	const { id } = useParams();
	const [newsList, setNewsList] = useState<NewsItem[]>([]);
	const [issue, setIssue] = useState<IssueCardProps | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

	useEffect(() => {
		if (!id) return;

		const fetchData = async () => {
			try {
				// 이슈 정보 받아오기
				const issueRes = await fetch(`/issues/${id}`);
				if (!issueRes.ok) throw new Error(`이슈 요청 실패: ${issueRes.status}`);
				const issueData = (await issueRes.json()) as IssueCardProps;
				setIssue(issueData);

				const query = encodeURIComponent(issueData.newsList.join(','));

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
	}, [id]);

	if (isLoading) return <Loading />;
	if (error) return <div>Error: {error}</div>;
	if (!issue) return <div>No Issue</div>;

	const handleNewsClick = (news: NewsItem) => {
		setSelectedNews(news);
	};

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
									onClick={() => handleNewsClick(news)}
								/>
							);
						})}
						{selectedNews && (
							<NewsModal
								news={selectedNews}
								onClose={() => {
									setSelectedNews(null);
								}}
							/>
						)}
					</TwoColumnGrid>
				</div>
			</div>
		</>
	);
};

export default IssueDetailPage;
