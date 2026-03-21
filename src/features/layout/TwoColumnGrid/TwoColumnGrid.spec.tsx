import { render, screen } from '@testing-library/react';

import { TwoColumnGrid } from './TwoColumnGrid';

describe('TwoColumnGrid', () => {
	it('children을 렌더링해야 한다', () => {
		render(
			<TwoColumnGrid>
				<div>A</div>
				<div>B</div>
			</TwoColumnGrid>,
		);
		expect(screen.getByText('A')).toBeInTheDocument();
		expect(screen.getByText('B')).toBeInTheDocument();
	});
});
