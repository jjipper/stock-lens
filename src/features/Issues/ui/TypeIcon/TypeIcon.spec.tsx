import { render } from '@testing-library/react';

import { TypeIcon } from './TypeIcon';

describe('TypeIcon', () => {
	it('SVG 아이콘을 렌더링해야 한다', () => {
		const { container } = render(<TypeIcon type="semiconductor" />);
		expect(container.querySelector('svg')).toBeInTheDocument();
	});
});
