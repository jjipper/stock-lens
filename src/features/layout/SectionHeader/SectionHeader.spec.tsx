import { render, screen } from '@testing-library/react';

import { SectionHeader } from './SectionHeader';

describe('SectionHeader', () => {
	it('제목을 렌더링해야 한다', () => {
		render(<SectionHeader title="테스트 섹션" />);
		expect(screen.getByText('테스트 섹션')).toBeInTheDocument();
	});

	it('updateTime이 있으면 표시해야 한다', () => {
		render(<SectionHeader title="섹션" updateTime="2시간 전" />);
		expect(screen.getByText('Updated 2시간 전')).toBeInTheDocument();
	});

	it('updateTime이 없으면 표시하지 않아야 한다', () => {
		render(<SectionHeader title="섹션" />);
		expect(screen.queryByText(/Updated/)).not.toBeInTheDocument();
	});
});
