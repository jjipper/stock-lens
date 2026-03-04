import { IssueCard, issuesAPI } from 'features/Issues';
import type { IssueCardProps } from 'features/types/types';
import { type FunctionComponent, useEffect, useState } from 'react';

export const IssuePage: FunctionComponent = () => {
	const [issues, setIssues] = useState<IssueCardProps[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const issuesList = (await issuesAPI('/')).data;
			setIssues(issuesList);
		};

		fetchData();
	}, []);

	return (
		<ul className="flex flex-col gap-4">
			{issues.map((issue) => (
				<IssueCard key={issue.id} {...issue} />
			))}
		</ul>
	);
};
