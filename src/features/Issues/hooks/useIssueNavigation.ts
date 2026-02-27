import type { KeyboardEvent } from 'react';
import { useNavigate } from 'react-router-dom';

export const useIssueNavigation = () => {
	const navigate = useNavigate();

	const handleIssueCardClick = (id: string) => {
		navigate(`/issue/${id}`);
	};

	const handleIssueCardKeyDown = (
		event: KeyboardEvent<HTMLElement>,
		id: string,
	) => {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			navigate(`/issue/${id}`);
		}
	};

	const handleStockChipClick = (ticker: string) => {
		navigate(`/stock/${ticker}`);
	};

	return { handleIssueCardClick, handleIssueCardKeyDown, handleStockChipClick };
};
