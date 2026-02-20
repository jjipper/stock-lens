import { Chips, Chip } from './StockChips.styles';

interface StockChipsProps {
  stocks: { name: string; ticker: string; percentage: number }[];
  showTicker: boolean;
  onChipClick?: (ticker: string) => void;
}

const StockChips = ({ stocks, showTicker, onChipClick }: StockChipsProps) => {
  const StockType = (percentage: number) => {
    return percentage > 0 ? 'up' : 'down';
  };
  const preventCardNavigation = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  return (
    <Chips>
      {stocks.map((stock) => {
        return (
          <Chip key={stock.ticker}>
            <ChipButton
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                onChipClick?.(stock.ticker);
              }}
              onKeyDown={preventCardNavigation}
              aria-label={`${stock.name} 종목 상세 보기`}
            >
            <div className="name-ticker">
              <span className="name">{stock.name}</span>
              {showTicker && <span className="ticker">{stock.ticker}</span>}
            </div>
            <span className={`percentage ${StockType(stock.percentage)}`}>
              {StockType(stock.percentage) === 'up' && '+'}
              {stock.percentage} %
            </span>
            </ChipButton>
          </Chip>
        );
      })}
    </Chips>
  );
};

export { StockChips };
