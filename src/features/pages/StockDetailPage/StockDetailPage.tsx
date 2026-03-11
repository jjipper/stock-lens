import { ErrorProvider } from 'features/app/provider/ErrorProvider';
import { NewsListWrapper } from 'features/News';
import { Loading } from 'features/shared';
import { StockDetailWrapper } from 'features/Stocks';
import { type FunctionComponent, Suspense } from 'react';

export const StockDetailPage: FunctionComponent = () => {
	return (
		<div className="w-full">
			<ErrorProvider>
				<Suspense fallback={<Loading />}>
					<StockDetailWrapper />
					<Suspense fallback={<Loading />}>
						<NewsListWrapper NewsType={'stock'} />
					</Suspense>
				</Suspense>
			</ErrorProvider>
		</div>
	);
};

export default StockDetailPage;
