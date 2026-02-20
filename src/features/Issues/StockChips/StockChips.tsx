import type { KeyboardEvent } from 'react';

interface StockChipsProps {
  stocks: { name: string; ticker: string; percentage: number }[];
  showTicker: boolean;
  onChipClick?: (ticker: string) => void;
}

const StockChips = ({ stocks, showTicker, onChipClick }: StockChipsProps) => {
  const preventCardNavigation = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  return (
    <ul className="flex gap-2">
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
              className="flex cursor-pointer items-center gap-1.5 rounded-full border border-transparent bg-gray-50 px-3 py-1.5 transition-[background,border-color] duration-300 hover:bg-gray-100"
            >
              <div className="text-sm font-medium">
                <span>{stock.name}</span>
                {showTicker && <span className="ml-1">{stock.ticker}</span>}
              </div>
              <span className={`text-sm font-semibold ${isUp ? 'text-red-500' : 'text-blue-500'}`}>
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

export { StockChips };
