import type { ReactNode } from 'react';

export const TwoColumnGrid = ({ children }: { children: ReactNode }) => {
	return (
		<div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
			{children}
		</div>
	);
};
