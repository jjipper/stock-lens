import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import { StockCard } from './StockCard';

const mockNavigate = vi.hoisted(() => vi.fn());

vi.mock('react-router-dom', async (importOriginal) => {
	const actual = await importOriginal<typeof import('react-router-dom')>();
	return { ...actual, useNavigate: () => mockNavigate };
});

const props = {
	name: '삼성전자',
	ticker: '005930',
	mainIssue: 'AI 반도체 수요 급증',
	price: 72000,
	percentage: 3.5,
	issueTone: 'bullish' as const,
	myStock: false,
	popular: true,
	newsList: [],
};

describe('StockCard', () => {
	it('종목명, 티커, 가격, 이슈를 렌더링해야 한다', () => {
		render(<StockCard {...props} />, { wrapper: BrowserRouter });
		expect(screen.getByText('삼성전자')).toBeInTheDocument();
		expect(screen.getByText('005930')).toBeInTheDocument();
		expect(screen.getByText('72,000원')).toBeInTheDocument();
		expect(screen.getByText('AI 반도체 수요 급증')).toBeInTheDocument();
		expect(screen.getByText('Bullish')).toBeInTheDocument();
	});

	it('클릭 시 종목 상세 페이지로 이동해야 한다', async () => {
		render(<StockCard {...props} />, { wrapper: BrowserRouter });
		await userEvent.click(screen.getByRole('button'));
		expect(mockNavigate).toHaveBeenCalledWith('/stock/005930');
	});
});
