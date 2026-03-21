import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from './Button';

describe('Button', () => {
	it('children 텍스트를 렌더링해야 한다', () => {
		render(
			<Button variant="primary" size="md">
				Click me
			</Button>,
		);
		expect(
			screen.getByRole('button', { name: 'Click me' }),
		).toBeInTheDocument();
	});

	it('클릭하면 onClick이 호출되어야 한다', async () => {
		const onClick = vi.fn();
		render(
			<Button variant="primary" size="md" onClick={onClick}>
				Click
			</Button>,
		);
		await userEvent.click(screen.getByRole('button'));
		expect(onClick).toHaveBeenCalledOnce();
	});
});
