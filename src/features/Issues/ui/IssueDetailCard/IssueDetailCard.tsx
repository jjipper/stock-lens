import { EffectTag } from 'features/shared';
import type { IssueCardProps } from 'features/types/types';
import { useNavigate } from 'react-router-dom';

import { NewsTag } from '../NewsTag/NewsTag';
import { StockChipsWithTicker } from '../StockChipsWithTicker/StockChipsWithTicker';
import { TypeIcon } from '../TypeIcon/TypeIcon';

export const IssueDetailCard = ({
	type,
	title,
	description,
	stocks,
	effect,
	newsCount,
	mention,
}: IssueCardProps) => {
	const navigate = useNavigate();

	const handleStockChipClick = (ticker: string) => {
		const STOCK_PATH = `/stock/${ticker}`;
		navigate(STOCK_PATH);
	};

	return (
		<article className="motion-fade-up rounded-panel shadow-card w-full border border-slate-200/80 bg-white/92 p-5 sm:p-6">
			<div className="flex items-start gap-4">
				<TypeIcon type={type} />

				<div className="flex min-w-0 flex-1 flex-col items-start gap-1">
					<h5 className="text-xl leading-snug font-semibold tracking-tight text-slate-900">
						{title}
					</h5>
					<p className="text-sm text-slate-600 sm:text-base">{description}</p>
				</div>
			</div>

			<div className="mt-5 rounded-xl border border-slate-200/80 bg-slate-50/70 px-4 py-3">
				<span className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
					Related Stocks
				</span>
				<div className="mt-2.5">
					<StockChipsWithTicker
						stocks={stocks}
						onChipClick={handleStockChipClick}
					/>
				</div>
			</div>

			<div className="mt-4 flex flex-wrap items-center gap-2 border-t border-slate-200/80 pt-4">
				<NewsTag newsCount={newsCount} mention={mention} />
				<EffectTag effect={effect} />
			</div>
		</article>
	);
};
