import type { KeyboardEvent } from 'react';

interface StockChipsWithTickerProps {
	stocks: { name: string; ticker: string; percentage: number }[];
	onChipClick?: (ticker: string) => void;
}

export const StockChipsWithTicker = ({
	stocks,
	onChipClick,
}: StockChipsWithTickerProps) => {
	const preventCardNavigation = (event: KeyboardEvent<HTMLButtonElement>) => {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			event.stopPropagation();
		}
	};

	return (
		<ul className="flex flex-wrap gap-2">
			{stocks.map((stock) => {
				const isUp = stock.percentage > 0;
				const directionText = isUp ? '상승' : '하락';
				const absPercentage = Math.abs(stock.percentage);

				return (
					<li key={stock.ticker}>
						<button
							type="button"
							onClick={(event) => {
								event.stopPropagation();
								onChipClick?.(stock.ticker);
							}}
							onKeyDown={preventCardNavigation}
							aria-label={`${stock.name} 종목 상세 보기`}
							className="flex cursor-pointer items-center gap-2 rounded-xl border border-slate-200/80 bg-slate-50/80 px-3 py-1.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white"
						>
							<div className="flex flex-col gap-0.5">
								<span className="text-sm font-medium text-slate-700">
									{stock.name}
								</span>
								<span className="text-xs font-medium text-slate-400">
									{stock.ticker}
								</span>
							</div>
							<span
								className={`text-sm font-semibold ${isUp ? 'text-red-500' : 'text-blue-500'}`}
							>
								<span aria-hidden>{isUp ? '+' : '-'}</span>
								<span>{absPercentage}%</span>
								<span className="sr-only">{directionText}</span>
							</span>
						</button>
					</li>
				);
			})}
		</ul>
	);
};
