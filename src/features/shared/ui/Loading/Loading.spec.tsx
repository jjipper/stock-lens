import { render, screen } from '@testing-library/react';

import { Loading } from './Loading';

describe('Loading', () => {
	it('로딩 스피너를 렌더링해야 한다', () => {
		render(<Loading />);
		expect(screen.getByLabelText('Loading Spinner')).toBeInTheDocument();
	});
});
