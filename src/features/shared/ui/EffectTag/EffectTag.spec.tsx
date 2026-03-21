import { render, screen } from '@testing-library/react';

import { EffectTag } from './EffectTag';

describe('EffectTag', () => {
	it.each(['high', 'middle', 'low'] as const)(
		'effect "%s"를 텍스트로 표시해야 한다',
		(effect) => {
			render(<EffectTag effect={effect} />);
			expect(screen.getByText(`Effect ${effect}`)).toBeInTheDocument();
		},
	);
});
