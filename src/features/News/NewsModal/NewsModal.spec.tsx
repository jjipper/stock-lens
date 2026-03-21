import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ToastProvider } from 'features/app/provider/ToastProvider';
import type { NewsItem } from 'features/types/types';

import { NewsModal } from './NewsModal';

const news: NewsItem = {
	id: 'news-1',
	title: '테스트 뉴스 제목',
	publishedAt: '2024-01-01',
	source: 'Test Source',
	imageUrl: 'https://test.com/image.png',
	summary: ['요약1', '요약2', '요약3'],
	impact: 'high',
	impactSummary: '영향 분석 내용',
	nextCheckpoint: '다음 체크포인트',
	articleUrl: 'https://test.com/article',
};

describe('NewsModal', () => {
	beforeEach(() => {
		const portal = document.createElement('div');
		portal.id = 'portal';
		document.body.appendChild(portal);
	});

	afterEach(() => {
		document.getElementById('portal')?.remove();
	});

	it('뉴스 제목, 소스, 날짜, 요약, 영향 분석을 렌더링해야 한다', () => {
		render(
			<ToastProvider>
				<NewsModal news={news} onClose={vi.fn()} />
			</ToastProvider>,
		);
		expect(screen.getByText('테스트 뉴스 제목')).toBeInTheDocument();
		expect(screen.getByText('Test Source')).toBeInTheDocument();
		expect(screen.getByText('2024-01-01')).toBeInTheDocument();
		expect(screen.getByText('요약1')).toBeInTheDocument();
		expect(screen.getByText('영향 분석 내용')).toBeInTheDocument();
		expect(screen.getByText('다음 체크포인트')).toBeInTheDocument();
	});

	it('닫기 버튼 클릭 시 onClose가 호출되어야 한다', async () => {
		const onClose = vi.fn();
		render(
			<ToastProvider>
				<NewsModal news={news} onClose={onClose} />
			</ToastProvider>,
		);
		await userEvent.click(screen.getByRole('button', { name: '닫기' }));
		expect(onClose).toHaveBeenCalledOnce();
	});

	it('Close 버튼 클릭 시 onClose가 호출되어야 한다', async () => {
		const onClose = vi.fn();
		render(
			<ToastProvider>
				<NewsModal news={news} onClose={onClose} />
			</ToastProvider>,
		);
		await userEvent.click(screen.getByRole('button', { name: 'Close' }));
		expect(onClose).toHaveBeenCalledOnce();
	});
});
