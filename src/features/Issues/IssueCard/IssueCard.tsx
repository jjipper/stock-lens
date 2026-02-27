import type { IssueCardProps } from 'features/types/types';
import type { KeyboardEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { EffectTag } from '../../shared/ui/EffectTag/EffectTag';
import { NewsTag } from '../NewsTag/NewsTag';
import { StockChips } from '../StockChips/StockChips';
import { TypeIcon } from '../TypeIcon/TypeIcon';

export const IssueCard = ({
	id,
	type,
	title,
	description,
	stocks,
	effect,
	newsCount,
	mention,
}: IssueCardProps) => {
	const navigate = useNavigate();
	const ISSUE_PATH = `/issue/${id}`;

	const handleIssueCardClick = () => {
		navigate(ISSUE_PATH);
	};

	const handleIssueCardKeyDown = (event: KeyboardEvent<HTMLElement>) => {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			navigate(ISSUE_PATH);
		}
	};

	const handleStockChipClick = (ticker: string) => {
		const STOCK_PATH = `/stock/${ticker}`;
		navigate(STOCK_PATH);
	};

	return (
		<li
			role="button"
			tabIndex={0}
			onClick={handleIssueCardClick}
			onKeyDown={handleIssueCardKeyDown}
			aria-label={`이슈 상세 보기: ${title}`}
			className="flex cursor-pointer items-start gap-4 rounded-xl border border-transparent bg-white px-5 py-4 transition-colors duration-300 hover:border-gray-300"
		>
			<TypeIcon type={type} />

			<div>
				<h5 className="text-lg font-bold text-gray-900">{title}</h5>
				<p className="mt-1.5 mb-2.5 text-base text-gray-700">{description}</p>

				<StockChips stocks={stocks} onChipClick={handleStockChipClick} />

				<div className="mt-2 flex items-center gap-2">
					<NewsTag newsCount={newsCount} mention={mention} />
					<EffectTag effect={effect} />
				</div>
			</div>
		</li>
	);
};
