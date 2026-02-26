interface PeriodReturnStatsProps {
	title: string;
	percentage: number;
	color: 'black' | 'blue' | 'red';
}

const PRICE_COLOR = {
	black: 'text-gray-800',
	red: 'text-red-500',
	blue: 'text-blue-800',
} as const;

export const PeriodReturnStats = ({
	title,
	percentage,
	color,
}: PeriodReturnStatsProps) => {
	return (
		<div className="flex items-center gap-4 text-sm font-medium">
			<div className="flex items-center gap-2">
				<span className="text-gray-700">{title}</span>
				<span className={`${PRICE_COLOR[color]}`}>{percentage}</span>
			</div>
		</div>
	);
};
