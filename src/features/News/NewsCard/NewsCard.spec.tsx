import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { NewsCard } from './NewsCard';

describe('NewsCard Rendering Test', () => {
	it('뉴스 카드는 제목, 소스, 날짜, 이미지를 표시해야 한다. [WOOWA-123]', async () => {
		// ARRANGE
		render(
			<NewsCard
				title="Test Title"
				publishedAt="2021-01-01"
				source="Test Source"
				imageUrl="https://test.com/image.png"
			/>,
		);

		// ACT
		const newsCard = screen.getByRole('button');
		const newsCardImage = screen.getByRole('img');

		// ASSERT
		expect(newsCard).toBeInTheDocument();
		expect(newsCard).toHaveTextContent('Test Title');
		expect(newsCard).toHaveTextContent('Test Source');
		expect(newsCard).toHaveTextContent('2021-01-01');

		expect(newsCardImage).toHaveAttribute('src', 'https://test.com/image.png');
	});
});

describe('NewsCard Interaction Test', () => {
	it('카드를 클릭하면 클릭 이벤트가 호출 되어야 한다', async () => {
		// ARRANGE
		const onClick = vi.fn(() => {
			console.log('clicked');
		});
		render(
			<NewsCard
				title="Test Title"
				publishedAt="2021-01-01"
				source="Test Source"
				imageUrl="https://test.com/image.png"
				onClick={onClick}
			/>,
		);

		// ACT
		await userEvent.click(screen.getByRole('button'));

		// ASSERT
		expect(onClick).toHaveBeenCalled();
	});
});
