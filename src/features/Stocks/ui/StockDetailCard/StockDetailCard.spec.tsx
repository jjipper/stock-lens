import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ToastProvider } from 'features/app/provider/ToastProvider';

import { StockDetailCard } from './StockDetailCard';

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

describe('StockDetailCard', () => {
	beforeEach(() => {
		const portal = document.createElement('div');
		portal.id = 'portal';
		document.body.appendChild(portal);
	});

	afterEach(() => {
		document.getElementById('portal')?.remove();
	});

	it('종목명, 티커, 가격, 핵심 이슈를 렌더링해야 한다', () => {
		render(
			<ToastProvider>
				<StockDetailCard {...props} />
			</ToastProvider>,
		);
		expect(screen.getByText('삼성전자')).toBeInTheDocument();
		expect(screen.getByText('005930')).toBeInTheDocument();
		expect(screen.getByText('72,000원')).toBeInTheDocument();
		expect(screen.getByText('AI 반도체 수요 급증')).toBeInTheDocument();
	});

	it('기간 버튼을 클릭할 수 있어야 한다', async () => {
		render(
			<ToastProvider>
				<StockDetailCard {...props} />
			</ToastProvider>,
		);
		const monthButton = screen.getByRole('button', { name: '1개월' });
		await userEvent.click(monthButton);
		expect(monthButton).toBeInTheDocument();
	});
});
