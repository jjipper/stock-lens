import { Loading, Toast } from 'features/shared';
import { type ReactNode, Suspense } from 'react';

import { ReactQueryProvider } from '../provider/ReactQueryProvider';
import { ErrorProvider } from './ErrorProvider';
import { ToastProvider } from './ToastProvider';

export const AppProvider = ({ children }: { children: ReactNode }) => {
	return (
		<ReactQueryProvider>
			<ErrorProvider>
				<Suspense fallback={<Loading />}>
					<ToastProvider>
						<Toast />
						{children}
					</ToastProvider>
				</Suspense>
			</ErrorProvider>
		</ReactQueryProvider>
	);
};
