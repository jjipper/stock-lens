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
	return (
		<div className="inline-flex items-center gap-1.5 rounded-md bg-gray-50 px-4 py-2">
			<span className="text-xs font-medium text-gray-500">{title}</span>
			<span className={`text-xs font-semibold ${PRICE_COLOR[color]}`}>
				{price}원
			</span>
		</div>
	);
};
