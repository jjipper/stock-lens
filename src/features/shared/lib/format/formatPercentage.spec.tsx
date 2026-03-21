import { render, screen } from '@testing-library/react';

import { formatPercentage } from './formatPercentage';

describe('formatPercentage', () => {
	it('양수일 때 "up"과 +를 표시해야 한다', () => {
		render(<>{formatPercentage(5.3)}</>);
		expect(screen.getByText('up')).toBeInTheDocument();
		expect(screen.getByText('5.3%')).toBeInTheDocument();
	});

	it('음수일 때 "down"과 -를 표시해야 한다', () => {
		render(<>{formatPercentage(-2.1)}</>);
		expect(screen.getByText('down')).toBeInTheDocument();
		expect(screen.getByText('2.1%')).toBeInTheDocument();
	});

	it('0일 때 아이콘 없이 0%를 표시해야 한다', () => {
		render(<>{formatPercentage(0)}</>);
		expect(screen.getByText('0%')).toBeInTheDocument();
		expect(screen.queryByText('up')).not.toBeInTheDocument();
		expect(screen.queryByText('down')).not.toBeInTheDocument();
	});
});
