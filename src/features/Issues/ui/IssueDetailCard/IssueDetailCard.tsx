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
		<article className="w-full rounded-xl border border-gray-200 bg-white p-5 pb-3">
			<div className="flex items-start gap-4">
				<TypeIcon type={type} />

				<div className="flex flex-col items-start gap-1">
					<h5 className="text-lg font-bold text-gray-900">{title}</h5>
					<p className="text-base text-gray-700">{description}</p>
				</div>
			</div>

			<div className="mt-4 flex flex-col gap-2">
				<span className="text-xs font-normal text-gray-500">
					Related Stocks
				</span>
				<StockChipsWithTicker
					stocks={stocks}
					onChipClick={handleStockChipClick}
				/>
			</div>

			<div className="mt-3 flex items-center gap-2 border-t border-gray-200 pt-3">
				<NewsTag newsCount={newsCount} mention={mention} />
				<EffectTag effect={effect} />
			</div>
		</article>
	);
};
