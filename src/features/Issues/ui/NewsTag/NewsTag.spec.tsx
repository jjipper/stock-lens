import { render, screen } from '@testing-library/react';

import { NewsTag } from './NewsTag';

describe('NewsTag', () => {
	it('뉴스 개수를 표시해야 한다', () => {
		render(<NewsTag newsCount={5} mention={false} />);
		expect(screen.getByText(/5/)).toBeInTheDocument();
		expect(screen.getByText(/related news items/)).toBeInTheDocument();
	});

	it('mention이 true이면 언급 급증 텍스트를 표시해야 한다', () => {
		render(<NewsTag newsCount={3} mention={true} />);
		expect(screen.getByText(/surge in mentions/)).toBeInTheDocument();
	});

	it('mention이 false이면 언급 급증 텍스트를 표시하지 않아야 한다', () => {
		render(<NewsTag newsCount={3} mention={false} />);
		expect(screen.queryByText(/surge in mentions/)).not.toBeInTheDocument();
	});
});
