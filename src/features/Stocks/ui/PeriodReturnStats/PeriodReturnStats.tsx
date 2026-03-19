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
		<div className="shadow-soft inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/90 px-4 py-2 text-sm font-medium">
			<span className="text-slate-700">{title}</span>
			<span className={`font-semibold ${PRICE_COLOR[color]}`}>
				{percentage}%
			</span>
		</div>
	);
};
