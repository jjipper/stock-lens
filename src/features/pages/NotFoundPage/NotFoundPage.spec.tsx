import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import { NotFoundPage } from './NotFoundPage';

const mockNavigate = vi.hoisted(() => vi.fn());

vi.mock('react-router-dom', async (importOriginal) => {
	const actual = await importOriginal<typeof import('react-router-dom')>();
	return {
		...actual,
		useNavigate: () => mockNavigate,
	};
});

describe('NotFoundPage Interaction Test', () => {
	it('버튼을 클릭 하면 이전 페이지로 라우터 이동을 해야한다', async () => {
		// ARRANGE
		render(<NotFoundPage />, { wrapper: BrowserRouter });

		// ACT
		await userEvent.click(screen.getByRole('button'));

		// ASSERT
		expect(mockNavigate).toHaveBeenCalledTimes(1);
		expect(mockNavigate).toHaveBeenCalledWith(-1);
	});
});
