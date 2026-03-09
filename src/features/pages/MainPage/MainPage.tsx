import { ErrorProvider } from 'features/app/provider/ErrorProvider';
import { Loading } from 'features/shared';
import { Suspense } from 'react';

import { IntroSection } from './components/IntroSection/IntroSection';
import { IssueSection } from './components/IssueSection/IssueSection';
import { PopularStocksSection } from './components/PopularStocksSection/PopularStocksSection';

export const MainPage = () => {
	return (
		<>
			<IntroSection />
			<ErrorProvider>
				<Suspense fallback={<Loading />}>
					<IssueSection />
					<PopularStocksSection />
				</Suspense>
			</ErrorProvider>
		</>
	);
};

export default MainPage;
