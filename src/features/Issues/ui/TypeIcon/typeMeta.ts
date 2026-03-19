import type { IssueType } from 'features/types/types';

import type { GlyphComponent } from './glyphs';
import {
	BatteryGlyph,
	BiotechGlyph,
	DefenseGlyph,
	EnergyGlyph,
	FinanceGlyph,
	InternetGlyph,
	MobilityGlyph,
	SemiconductorGlyph,
} from './glyphs';

interface TypeIconMeta {
	Glyph: GlyphComponent;
	glyphSizeClass: string;
}

export const typeMeta = {
	semiconductor: {
		Glyph: SemiconductorGlyph,
		glyphSizeClass: 'h-[24px] w-[24px]',
	},
	battery: {
		Glyph: BatteryGlyph,
		glyphSizeClass: 'h-[24px] w-[24px]',
	},
	biotech: {
		Glyph: BiotechGlyph,
		glyphSizeClass: 'h-[24px] w-[24px]',
	},
	mobility: {
		Glyph: MobilityGlyph,
		glyphSizeClass: 'h-[24px] w-[24px]',
	},
	internet: {
		Glyph: InternetGlyph,
		glyphSizeClass: 'h-[23px] w-[23px]',
	},
	energy: {
		Glyph: EnergyGlyph,
		glyphSizeClass: 'h-[24px] w-[24px]',
	},
	defense: {
		Glyph: DefenseGlyph,
		glyphSizeClass: 'h-[24px] w-[24px]',
	},
	finance: {
		Glyph: FinanceGlyph,
		glyphSizeClass: 'h-[22px] w-[22px]',
	},
} as const satisfies Record<IssueType, TypeIconMeta>;
