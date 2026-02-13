import { Chips, Chip } from './StockChips.styles';

interface StockChipsProps {
  stocks: { name: string; ticker: string; percentage: number }[];
  showTicker: boolean;
}

const StockChips = ({ stocks, showTicker }: StockChipsProps) => {
  function StockType(percentage: number) {
    return percentage > 0 ? 'up' : 'down';
  }

  return (
    <Chips>
      {stocks.map((stock) => {
        return (
          <Chip key={stock.ticker}>
            <div className="name-ticker">
              <span className="name">{stock.name}</span>
              {showTicker && <span className="ticker">{stock.ticker}</span>}
            </div>
            <span className={`percentage ${StockType(stock.percentage)}`}>
              {StockType(stock.percentage) === 'up' && '+'}
              {stock.percentage} %
            </span>
          </Chip>
        );
      })}
    </Chips>
  );
};

export { StockChips };
