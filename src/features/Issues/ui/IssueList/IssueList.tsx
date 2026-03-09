import { IssueCard, useIssuesQuery } from 'features/Issues';
import { type FunctionComponent } from 'react';

export const IssueList: FunctionComponent = () => {
	const { data } = useIssuesQuery();

	if (data.length === 0) return <div>No Issues</div>;

	return (
		<ul className="flex flex-col gap-4">
			{data.map((issue) => (
				<IssueCard key={issue.id} {...issue} />
			))}
		</ul>
	);
};
