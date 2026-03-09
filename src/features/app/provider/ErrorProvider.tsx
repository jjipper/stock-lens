import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { Button } from 'features/shared';
import { type ReactNode } from 'react';
import {
	ErrorBoundary,
	type FallbackProps,
	getErrorMessage,
} from 'react-error-boundary';

export const ErrorProvider = ({ children }: { children: ReactNode }) => {
	return (
		<QueryErrorResetBoundary>
			{({ reset }) => (
				<ErrorBoundary FallbackComponent={ErrorFallback} onReset={reset}>
					{children}
				</ErrorBoundary>
			)}
		</QueryErrorResetBoundary>
	);
};

export const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
	return (
		<div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-4 text-center">
			<p className="text-lg text-gray-500">
				The page has an error: {getErrorMessage(error)}
			</p>
			<Button variant="primary" size="lg" onClick={resetErrorBoundary}>
				Try Again
			</Button>
		</div>
	);
};
