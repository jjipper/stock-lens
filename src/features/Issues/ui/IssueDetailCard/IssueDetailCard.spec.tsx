import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { IssueDetailCard } from './IssueDetailCard';

const props = {
	id: 'issue-1',
	type: 'semiconductor' as const,
	title: 'AI 반도체 이슈',
	description: '반도체 수요 급증',
	stocks: [{ name: '삼성전자', ticker: '005930', percentage: 3.2 }],
	newsCount: 5,
	newsList: [],
	mention: false,
	effect: 'high' as const,
};

describe('IssueDetailCard', () => {
	it('제목, 설명, 관련 종목, 이펙트 태그를 렌더링해야 한다', () => {
		render(<IssueDetailCard {...props} />, { wrapper: BrowserRouter });
		expect(screen.getByText('AI 반도체 이슈')).toBeInTheDocument();
		expect(screen.getByText('반도체 수요 급증')).toBeInTheDocument();
		expect(screen.getByText('삼성전자')).toBeInTheDocument();
		expect(screen.getByText('Related Stocks')).toBeInTheDocument();
		expect(screen.getByText('Effect high')).toBeInTheDocument();
	});
});
