import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import { AppBarLayout } from './AppBarLayout';

const mockNavigate = vi.hoisted(() => vi.fn());

vi.mock('react-router-dom', async (importOriginal) => {
	const actual = await importOriginal<typeof import('react-router-dom')>();
	return { ...actual, useNavigate: () => mockNavigate };
});

describe('AppBarLayout', () => {
	it('뒤로가기 버튼을 렌더링해야 한다', () => {
		render(<AppBarLayout />, { wrapper: BrowserRouter });
		expect(screen.getByRole('button')).toBeInTheDocument();
	});

	it('뒤로가기 버튼 클릭 시 navigate(-1)이 호출되어야 한다', async () => {
		render(<AppBarLayout />, { wrapper: BrowserRouter });
		const buttons = screen.getAllByRole('button');
		await userEvent.click(buttons[0]);
		expect(mockNavigate).toHaveBeenCalledWith(-1);
	});
});
