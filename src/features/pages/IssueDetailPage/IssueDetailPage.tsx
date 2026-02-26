import { IssueCard } from 'features/Issues';
import { NotFoundPage, SectionHeader, TwoColumnGrid } from 'features/layout';
import { NewsCard } from 'features/News/NewsCard/NewsCard';
import { Loading } from 'features/shared';
import type {
	AppBarOutletContext,
	IssueCardProps,
	NewsListItem,
} from 'features/types/types';
import { type FunctionComponent, useEffect, useState } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';

const IssueDetailPage: FunctionComponent = () => {
	const { id } = useParams();
	const [newsList, setNewsList] = useState<NewsListItem[]>([]);
	const [issue, setIssue] = useState<IssueCardProps | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

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
				const newsData = (await newsRes.json()) as NewsListItem[];
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

	// app bar Layout 타이틀 설정
	const { setAppBarTitle } = useOutletContext<AppBarOutletContext>();

	useEffect(() => {
		setAppBarTitle(`${issue?.title}`);
	}, [issue, setAppBarTitle]);

	if (isLoading) return <Loading />;
	if (error) return <div>Error: {error}</div>;
	if (!issue) return <NotFoundPage />;

	return (
		<div className="w-full">
			<ul className="flex flex-col gap-4">
				<IssueCard {...issue} />
			</ul>

			<div className="mt-6">
				<SectionHeader title="최신 뉴스" updateTime="2시간 전" />
				<div className="mt-2">
					<TwoColumnGrid>
						{newsList.map((news) => {
							return (
								<NewsCard
									key={news.id}
									imageUrl={news.imageUrl}
									title={news.title}
									source={news.source}
									publishedAt={news.publishedAt}
								/>
							);
						})}
					</TwoColumnGrid>
				</div>
			</div>
		</div>
	);
};

export default IssueDetailPage;
