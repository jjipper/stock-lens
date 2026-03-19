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
			className="group rounded-card shadow-soft hover:shadow-card flex cursor-pointer items-start gap-4 overflow-hidden border border-slate-200/80 bg-white/90 px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300"
		>
			<div className="mt-0.5">
				<TypeIcon type={type} />
			</div>

			<div className="min-w-0 flex-1">
				<h5 className="text-lg font-semibold tracking-tight text-slate-900">
					{title}
				</h5>
				<p className="mt-1.5 text-sm text-slate-600 sm:text-base">
					{description}
				</p>

				<div className="mt-2.5">
					<StockChips stocks={stocks} onChipClick={handleStockChipClick} />
				</div>

				<div className="mt-3 flex flex-wrap items-center gap-2">
					<NewsTag newsCount={newsCount} mention={mention} />
					<EffectTag effect={effect} />
				</div>
			</div>
		</li>
	);
};
