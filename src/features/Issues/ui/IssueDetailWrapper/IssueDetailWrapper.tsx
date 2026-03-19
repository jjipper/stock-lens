import { useIssueDetailQuery } from 'features/Issues/hooks/useIssueDetailQuery';
import { useParams } from 'react-router-dom';

import { IssueDetailCard } from '../IssueDetailCard/IssueDetailCard';

export const IssueDetailWrapper = () => {
	const { id } = useParams();
	const { data: issue } = useIssueDetailQuery(id ?? '');

	if (!id) return <div>No Issue</div>;

	return (
		<div className="flex flex-col gap-4">
			<IssueDetailCard {...issue} />
		</div>
	);
};
