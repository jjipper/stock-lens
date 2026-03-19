import type { IssueType } from 'features/types/types';
import type { CSSProperties } from 'react';

import { typeMeta } from './typeMeta';

interface TypeIconProps {
	type: IssueType;
}

const iconPalette = {
	'--icon-base': '#171717',
	'--icon-point': 'var(--color-primary)',
} as CSSProperties;

export const TypeIcon = ({ type }: TypeIconProps) => {
	const { Glyph, glyphSizeClass } = typeMeta[type];

	return (
		<div
			style={iconPalette}
			className="shadow-soft group-hover:border-primary/30 group-hover:shadow-card relative inline-flex h-[3.35rem] w-[3.35rem] shrink-0 items-center justify-center rounded-[1.08rem] border border-slate-200/85 bg-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5"
		>
			<span
				aria-hidden
				className="from-primary/20 absolute inset-0 rounded-[1.08rem] bg-linear-to-br to-transparent opacity-40 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] group-hover:opacity-75"
			/>
			<span
				aria-hidden
				className="absolute inset-[1.5px] rounded-[0.98rem] border border-white/55 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-75"
			/>
			<Glyph
				className={`relative z-10 ${glyphSizeClass} transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]`}
			/>
		</div>
	);
};
