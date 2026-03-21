import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { Header } from './Header';

describe('Header', () => {
	it('로고와 네비게이션 링크를 렌더링해야 한다', () => {
		render(<Header />, { wrapper: BrowserRouter });
		expect(screen.getByText('Stock Lens')).toBeInTheDocument();
		expect(screen.getByText('Issues')).toBeInTheDocument();
		expect(screen.getByText('Stocks')).toBeInTheDocument();
	});
});
