import { useEffect } from 'react';
import { createPortal } from 'react-dom';

export const Portal = ({ children }: { children: React.ReactNode }) => {
	useEffect(() => {
		const originalOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = originalOverflow;
		};
	}, []);

	return createPortal(
		children,
		document.getElementById('portal') as HTMLElement,
	);
};
