import { IssueCard, useIssuesQuery } from 'features/Issues';
import { SectionHeader, SectionWrapper } from 'features/layout';

export const IssueSection = () => {
	const { data: issues } = useIssuesQuery(3);

	return (
		<SectionWrapper>
			<SectionHeader title={'Top Trending Issues'} updateTime={'Just now'} />

			<ul className="flex flex-col gap-4">
				{issues.map((issue) => (
					<IssueCard key={issue.id} {...issue} />
				))}
			</ul>
		</SectionWrapper>
	);
};
