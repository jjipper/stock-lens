import { createPortal } from 'react-dom';

export const Portal = ({ children }: { children: React.ReactNode }) => {
	// TODO: 뉴스 모달에서만 스크롤 막히도록 작업 필요
	// useEffect(() => {
	// 	const originalOverflow = document.body.style.overflow;
	// 	document.body.style.overflow = 'hidden';
	// 	return () => {
	// 		document.body.style.overflow = originalOverflow;
	// 	};
	// }, []);

	return createPortal(
		children,
		document.getElementById('portal') as HTMLElement,
	);
};
