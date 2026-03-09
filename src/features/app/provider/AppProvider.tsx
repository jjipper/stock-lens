import { Loading } from 'features/shared';
import { type ReactNode, Suspense } from 'react';

import { ReactQueryProvider } from '../provider/ReactQueryProvider';
import { ErrorProvider } from './ErrorProvider';

export const AppProvider = ({ children }: { children: ReactNode }) => {
	return (
		<ReactQueryProvider>
			<ErrorProvider>
				<Suspense fallback={<Loading />}>{children}</Suspense>
			</ErrorProvider>
		</ReactQueryProvider>
	);
};
