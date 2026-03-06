import { IssueCard, useIssuesQuery } from 'features/Issues';
import { type FunctionComponent } from 'react';

const IssuePage: FunctionComponent = () => {
	const query = useIssuesQuery();

	if (query.isError) return <div>Error: {query.error.message}</div>;
	if (query.data?.length === 0) return <div>No Issues</div>;

	return (
		<ul className="flex flex-col gap-4">
			{query.data?.map((issue) => (
				<IssueCard key={issue.id} {...issue} />
			))}
		</ul>
	);
};

export default IssuePage;
