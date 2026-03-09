import { ErrorProvider } from 'features/app/provider/ErrorProvider';
import { Loading } from 'features/shared';
import { StockList } from 'features/Stocks';
import { type FunctionComponent, Suspense } from 'react';

export const StockPage: FunctionComponent = () => {
	return (
		<ErrorProvider>
			<Suspense fallback={<Loading />}>
				<StockList />
			</Suspense>
		</ErrorProvider>
	);
};

export default StockPage;
