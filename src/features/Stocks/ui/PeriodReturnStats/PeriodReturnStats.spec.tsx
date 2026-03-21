import { render, screen } from '@testing-library/react';

import { PeriodReturnStats } from './PeriodReturnStats';

describe('PeriodReturnStats', () => {
	it('제목과 퍼센트를 표시해야 한다', () => {
		render(<PeriodReturnStats title="1주" percentage={8.5} color="red" />);
		expect(screen.getByText('1주')).toBeInTheDocument();
		expect(screen.getByText('8.5%')).toBeInTheDocument();
	});
});
