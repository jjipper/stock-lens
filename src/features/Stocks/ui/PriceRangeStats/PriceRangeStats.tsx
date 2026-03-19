import { formatNumber } from 'features/shared';

interface PriceRangeStatsType {
	title: string;
	price: number;
	color: 'black' | 'blue' | 'red';
}

const PRICE_COLOR = {
	black: 'text-gray-800',
	red: 'text-red-500',
	blue: 'text-blue-800',
} as const;

export const PriceRangeStats = ({
	title,
	price,
	color,
}: PriceRangeStatsType) => {
	const formattedPrice = formatNumber(price);

	return (
		<div className="shadow-soft inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/90 px-4 py-2">
			<span className="text-xs font-semibold text-slate-500">{title}</span>
			<span className={`text-xs font-semibold ${PRICE_COLOR[color]}`}>
				{formattedPrice}원
			</span>
		</div>
	);
};
