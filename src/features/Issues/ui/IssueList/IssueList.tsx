import { IssueCard } from 'features/Issues';
import { useIssuesInfinityQuery } from 'features/Issues/hooks/useIssuesInfinityQuery';
import { type FunctionComponent, useEffect, useRef } from 'react';

export const IssueList: FunctionComponent = () => {
	const { data, fetchNextPage, hasNextPage } = useIssuesInfinityQuery();

	const observerRef = useRef<HTMLDivElement>(null);

	const list = data.pages.flatMap((page) => page.list);

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
	}, [fetchNextPage, hasNextPage]);

	return (
		<ul className="motion-fade-up flex flex-col gap-5">
			{list.map((issue) => (
				<IssueCard key={issue.id} {...issue} />
			))}
			{hasNextPage && <div ref={observerRef} />}
		</ul>
	);
};
