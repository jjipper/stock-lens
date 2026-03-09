import { ErrorProvider } from 'features/app/provider/ErrorProvider';
import { IssueList } from 'features/Issues';
import { Loading } from 'features/shared';
import { type FunctionComponent, Suspense } from 'react';

const IssuePage: FunctionComponent = () => {
	return (
		<ErrorProvider>
			<Suspense fallback={<Loading />}>
				<IssueList />
			</Suspense>
		</ErrorProvider>
	);
};

export default IssuePage;
