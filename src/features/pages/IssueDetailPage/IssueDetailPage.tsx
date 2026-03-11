import { ErrorProvider } from 'features/app/provider/ErrorProvider';
import { IssueDetailWrapper } from 'features/Issues';
import { NewsListWrapper } from 'features/News';
import { Loading } from 'features/shared';
import { type FunctionComponent, Suspense } from 'react';

export const IssueDetailPage: FunctionComponent = () => {
	return (
		<div className="w-full">
			<ErrorProvider>
				<Suspense fallback={<Loading />}>
					<IssueDetailWrapper />
					<Suspense fallback={<Loading />}>
						<NewsListWrapper NewsType={'issue'} />
					</Suspense>
				</Suspense>
			</ErrorProvider>
		</div>
	);
};

export default IssueDetailPage;
