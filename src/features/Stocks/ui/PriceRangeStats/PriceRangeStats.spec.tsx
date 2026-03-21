import { render, screen } from '@testing-library/react';

import { PriceRangeStats } from './PriceRangeStats';

describe('PriceRangeStats', () => {
	it('제목과 포맷된 가격을 표시해야 한다', () => {
		render(<PriceRangeStats title="최고" price={215000} color="red" />);
		expect(screen.getByText('최고')).toBeInTheDocument();
		expect(screen.getByText('215,000원')).toBeInTheDocument();
	});
});
