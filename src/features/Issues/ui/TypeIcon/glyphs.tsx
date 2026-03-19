import type { ReactElement } from 'react';

export interface GlyphProps {
	className?: string;
}

export type GlyphComponent = (props: GlyphProps) => ReactElement;

const ICON_BASE = 'var(--icon-base)';
const ICON_POINT = 'var(--icon-point)';

export const SemiconductorGlyph = ({ className }: GlyphProps) => (
	<svg
		viewBox="0 0 24 24"
		className={className}
		aria-hidden
		fill="none"
		stroke={ICON_BASE}
		strokeWidth="1.3"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<rect x="5.8" y="5.8" width="12.4" height="12.4" rx="2.1" />
		<path d="M8.6 2.6v2.4M12 2.6v2.4M15.4 2.6v2.4M8.6 19v2.4M12 19v2.4M15.4 19v2.4" />
		<path d="M2.6 8.6H5M2.6 12H5M2.6 15.4H5M19 8.6h2.4M19 12h2.4M19 15.4h2.4" />
		<rect
			x="9.45"
			y="9.45"
			width="5.1"
			height="5.1"
			rx="1.1"
			fill={ICON_POINT}
			stroke={ICON_BASE}
			strokeWidth="1.1"
		/>
	</svg>
);

export const BatteryGlyph = ({ className }: GlyphProps) => (
	<svg
		viewBox="0 0 24 24"
		className={className}
		aria-hidden
		fill="none"
		stroke={ICON_BASE}
		strokeWidth="1.3"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<rect x="3.5" y="7.8" width="15.2" height="8.4" rx="2.5" />
		<path d="M20.8 10.3v3.4" />
		<path
			d="m10 8.9-2.1 3.4h2.4l-1 2.9 3.8-4.7h-2.3l1.1-1.6z"
			fill={ICON_POINT}
		/>
	</svg>
);

export const BiotechGlyph = ({ className }: GlyphProps) => (
	<svg
		viewBox="0 0 24 24"
		className={className}
		aria-hidden
		fill="none"
		stroke={ICON_BASE}
		strokeWidth="1.3"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<circle cx="7.8" cy="8.3" r="2.2" />
		<circle cx="16.2" cy="8.3" r="2.2" />
		<circle cx="12" cy="15.8" r="2.2" />
		<path d="M9.4 9.5 10.9 12.3M14.6 9.5 13.1 12.3M9.7 14.5h4.6" />
		<circle cx="16.2" cy="8.3" r="1.1" fill={ICON_POINT} stroke="none" />
	</svg>
);

export const MobilityGlyph = ({ className }: GlyphProps) => (
	<svg
		viewBox="0 0 24 24"
		className={className}
		aria-hidden
		fill="none"
		stroke={ICON_BASE}
		strokeWidth="1.3"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="M5.2 14.7h13.6l-1.3-4.2H6.5l-1.3 4.2z" />
		<path d="M8.1 10.5V9.2a1.25 1.25 0 0 1 1.25-1.25h5.3A1.25 1.25 0 0 1 16 9.2v1.3" />
		<circle cx="8.1" cy="16" r="1.8" />
		<circle cx="15.9" cy="16" r="1.8" />
		<circle cx="15.9" cy="16" r="0.8" fill={ICON_POINT} stroke="none" />
	</svg>
);

export const InternetGlyph = ({ className }: GlyphProps) => (
	<svg
		viewBox="0 0 24 24"
		className={className}
		aria-hidden
		fill="none"
		stroke={ICON_BASE}
		strokeWidth="1.3"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<circle cx="12" cy="12" r="8.3" />
		<path d="M3.8 12h16.4M12 3.7c2.7 2.7 2.7 13.9 0 16.6M12 3.7c-2.7 2.7-2.7 13.9 0 16.6" />
		<path d="M6.7 8.6h10.6" />
		<path d="M6.7 15.4h10.6" stroke={ICON_POINT} />
	</svg>
);

export const EnergyGlyph = ({ className }: GlyphProps) => (
	<svg
		viewBox="0 0 24 24"
		className={className}
		aria-hidden
		fill="none"
		stroke={ICON_BASE}
		strokeWidth="1.3"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<circle cx="12" cy="12" r="8.3" />
		<path
			d="m13.1 6.2-3.8 5.7h2.6l-1 5.1 3.9-6.4h-2.6l.9-4.4z"
			fill={ICON_POINT}
		/>
	</svg>
);

export const DefenseGlyph = ({ className }: GlyphProps) => (
	<svg
		viewBox="0 0 24 24"
		className={className}
		aria-hidden
		fill="none"
		stroke={ICON_BASE}
		strokeWidth="1.3"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="M12 3.3 5.5 6.1v4.8c0 4.1 2.5 6.8 6.5 9.2 4-2.4 6.5-5.1 6.5-9.2V6.1L12 3.3z" />
		<path d="m9.2 12.1 2.1 2.1 3.5-3.5" stroke={ICON_POINT} strokeWidth="1.6" />
	</svg>
);

export const FinanceGlyph = ({ className }: GlyphProps) => (
	<svg
		viewBox="0 0 24 24"
		className={className}
		aria-hidden
		fill="none"
		stroke={ICON_BASE}
		strokeWidth="1.3"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="M4.6 18.4h14.8" />
		<path d="M7.1 18.4v-4.9M11.9 18.4v-7.2M16.8 18.4v-3.2" />
		<path d="m5.9 12.7 3.3-3.1 2.9 2 4.5-4.1" />
		<path d="m12.1 11.6 4.5-4.1" stroke={ICON_POINT} strokeWidth="1.6" />
	</svg>
);
