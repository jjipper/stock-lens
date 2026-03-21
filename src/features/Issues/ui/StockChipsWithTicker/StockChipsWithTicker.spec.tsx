import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import { StockChipsWithTicker } from './StockChipsWithTicker';

const stocks = [{ name: '삼성전자', ticker: '005930', percentage: 3.2 }];

describe('StockChipsWithTicker', () => {
	it('종목 이름, 티커, 퍼센트를 표시해야 한다', () => {
		render(<StockChipsWithTicker stocks={stocks} />, {
			wrapper: BrowserRouter,
		});
		expect(screen.getByText('삼성전자')).toBeInTheDocument();
		expect(screen.getByText('005930')).toBeInTheDocument();
		expect(screen.getByText('3.2%')).toBeInTheDocument();
	});

	it('칩 클릭 시 onChipClick이 ticker와 함께 호출되어야 한다', async () => {
		const onChipClick = vi.fn();
		render(<StockChipsWithTicker stocks={stocks} onChipClick={onChipClick} />, {
			wrapper: BrowserRouter,
		});
		await userEvent.click(
			screen.getByRole('button', { name: /삼성전자 종목 상세 보기/ }),
		);
		expect(onChipClick).toHaveBeenCalledWith('005930');
	});
});
