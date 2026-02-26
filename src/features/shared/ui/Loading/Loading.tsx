import { HashLoader } from 'react-spinners';

export const Loading = () => {
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
			<HashLoader color="#1e5eec" size={60} aria-label="Loading Spinner" />
		</div>
	);
};
