import { Button } from 'features/shared';
import { useNavigate } from 'react-router-dom';

export const SectionEmpty = () => {
	const navigate = useNavigate();
	const handleMainClick = () => {
		navigate('/');
	};

	return (
		<section className="flex min-h-[52vh] w-full items-center justify-center px-4 py-8">
			<div className="rounded-panel shadow-card flex w-full max-w-md flex-col items-center justify-center gap-4 border border-white/80 bg-white/88 px-6 py-8 text-center backdrop-blur-sm">
				<p className="text-xl font-semibold tracking-tight text-slate-700">
					The page is empty
				</p>
				<Button variant="primary" size="lg" onClick={handleMainClick}>
					Go To Main
				</Button>
			</div>
		</section>
	);
};
