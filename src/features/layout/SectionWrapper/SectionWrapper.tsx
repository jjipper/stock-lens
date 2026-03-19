import type { ReactNode } from 'react';

export const SectionWrapper = ({ children }: { children: ReactNode }) => {
	return (
		<section className="motion-fade-up rounded-panel shadow-card flex flex-col gap-4 border border-white/75 bg-white/78 p-5 backdrop-blur-sm sm:p-6">
			{children}
		</section>
	);
};
