import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import { SectionEmpty } from './SectionEmpty';

const mockNavigate = vi.hoisted(() => vi.fn());

vi.mock('react-router-dom', async (importOriginal) => {
	const actual = await importOriginal<typeof import('react-router-dom')>();
	return { ...actual, useNavigate: () => mockNavigate };
});

describe('SectionEmpty', () => {
	it('"The page is empty" 텍스트와 버튼을 렌더링해야 한다', () => {
		render(<SectionEmpty />, { wrapper: BrowserRouter });
		expect(screen.getByText('The page is empty')).toBeInTheDocument();
		expect(
			screen.getByRole('button', { name: 'Go To Main' }),
		).toBeInTheDocument();
	});

	it('버튼 클릭 시 메인 페이지로 이동해야 한다', async () => {
		render(<SectionEmpty />, { wrapper: BrowserRouter });
		await userEvent.click(screen.getByRole('button', { name: 'Go To Main' }));
		expect(mockNavigate).toHaveBeenCalledWith('/');
	});
});
