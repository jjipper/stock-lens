import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import { IssueCard } from './IssueCard';

const mockNavigate = vi.hoisted(() => vi.fn());

vi.mock('react-router-dom', async (importOriginal) => {
	const actual = await importOriginal<typeof import('react-router-dom')>();
	return { ...actual, useNavigate: () => mockNavigate };
});

const props = {
	id: 'issue-1',
	type: 'semiconductor' as const,
	title: 'AI 반도체 이슈',
	description: '반도체 수요 급증',
	stocks: [{ name: '삼성전자', ticker: '005930', percentage: 3.2 }],
	newsCount: 5,
	newsList: [],
	mention: true,
	effect: 'high' as const,
};

describe('IssueCard', () => {
	it('제목, 설명, 관련 종목, 뉴스 태그, 이펙트 태그를 렌더링해야 한다', () => {
		render(<IssueCard {...props} />, { wrapper: BrowserRouter });
		expect(screen.getByText('AI 반도체 이슈')).toBeInTheDocument();
		expect(screen.getByText('반도체 수요 급증')).toBeInTheDocument();
		expect(screen.getByText('삼성전자')).toBeInTheDocument();
		expect(screen.getByText('Effect high')).toBeInTheDocument();
	});

	it('카드 클릭 시 이슈 상세 페이지로 이동해야 한다', async () => {
		render(<IssueCard {...props} />, { wrapper: BrowserRouter });
		await userEvent.click(
			screen.getByRole('button', { name: /이슈 상세 보기/ }),
		);
		expect(mockNavigate).toHaveBeenCalledWith('/issue/issue-1');
	});
});
