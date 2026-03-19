import { formatNumber, formatPercentage } from 'features/shared';
import type { StockCardProps } from 'features/types/types';
import { useNavigate } from 'react-router-dom';

export const StockCard = ({
	name,
	ticker,
	mainIssue,
	price,
	percentage,
	issueTone,
}: StockCardProps) => {
	const navigate = useNavigate();
	const STOCK_PATH = `/stock/${ticker}`;

	const handleStockCardClick = () => {
		navigate(STOCK_PATH);
	};

	const formattedPrice = formatNumber(price);
	const issueToneStyleMap = {
		bullish: 'border-emerald-200/80 bg-emerald-50 text-emerald-700',
		bearish: 'border-rose-200/80 bg-rose-50 text-rose-700',
	} as const;
	const issueToneLabelMap = {
		bullish: 'Bullish',
		bearish: 'Bearish',
	} as const;

	return (
		<button
			type="button"
			onClick={handleStockCardClick}
			aria-label={`${name} ${ticker} 상세 보기. 현재가 ${price}원`}
			className="flex w-full cursor-pointer flex-col items-center justify-between gap-2 rounded-xl border border-gray-200 bg-white px-5 py-4 text-left transition-colors duration-300 hover:border-gray-400"
		>
			<dl className="flex w-full flex-col justify-start gap-0.5">
				<dt className="flex items-center gap-1.5">
					<span className="text-lg font-semibold text-gray-900">{name}</span>
					<span className="text-sm text-gray-400">{ticker}</span>
				</dt>
				<dd className="flex flex-wrap items-center gap-2">
					<span
						className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] leading-none font-semibold tracking-wide ${issueToneStyleMap[issueTone]}`}
					>
						{issueToneLabelMap[issueTone]}
					</span>
					<span className="text-sm font-medium text-slate-600">
						{mainIssue ?? '관련 이슈 없음'}
					</span>
				</dd>
			</dl>
			<div className="flex w-full justify-end gap-2">
				{formatPercentage(percentage)}
				<span className="text-lg font-semibold text-gray-800">
					{formattedPrice}원
				</span>
			</div>
		</button>
	);
};
