import { render, screen } from '@testing-library/react';

import { SectionWrapper } from './SectionWrapper';

describe('SectionWrapper', () => {
	it('children을 렌더링해야 한다', () => {
		render(
			<SectionWrapper>
				<p>내용</p>
			</SectionWrapper>,
		);
		expect(screen.getByText('내용')).toBeInTheDocument();
	});
});
