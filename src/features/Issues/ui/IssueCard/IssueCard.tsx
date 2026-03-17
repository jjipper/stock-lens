import { EffectTag } from 'features/shared/';
import type { IssueCardProps } from 'features/types/types';

import { useIssueNavigation } from '../../hooks/useIssueNavigation';
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
	const { handleIssueCardClick, handleIssueCardKeyDown, handleStockChipClick } =
		useIssueNavigation();

	return (
		<li
			role="button"
			tabIndex={0}
			onClick={() => handleIssueCardClick(id)}
			onKeyDown={(event) => handleIssueCardKeyDown(event, id)}
			aria-label={`이슈 상세 보기: ${title}`}
			className="flex cursor-pointer items-start gap-4 rounded-xl border border-gray-200 bg-white px-5 py-4 transition-colors duration-300 hover:border-gray-400"
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
