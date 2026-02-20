import { Card } from './StockCard.styles';
import type { StockCardProps } from 'features/types/types';
import { TrendingUpIcon, TrendingDownIcon } from 'features/shared';
import { useNavigate } from 'react-router-dom';

export const StockCard = ({
  name,
  ticker,
  mainIssue,
  price,
  percentage,
}: StockCardProps) => {
  const navigate = useNavigate();
  const isUp = percentage > 0;
  const directionText = isUp ? '상승' : '하락';
  const absPercentage = Math.abs(percentage);

  const handleStockCardClick = () => {
    navigate('/stock');
  };

  return (
    <Card
      type="button"
      onClick={handleStockCardClick}
      aria-label={`${name} ${ticker} 상세 보기. 현재가 ${price}원, ${directionText} ${absPercentage}%`}
    >
      <dl className="stock-info">
        <dt>
          <span className="name">{name}</span>
          <span className="ticker">{ticker}</span>
        </dt>
        <dd className="main-issue">{mainIssue}</dd>
      </dl>
      <div className="stock-price">
        <span className="price">{price}원</span>
        <span className={`percentage ${isUp ? 'up' : 'down'}`}>
          {isUp ? (
            <>
              <TrendingUpIcon sx={{ fontSize: 16 }} aria-hidden />
              <span className="percentage-mark">+</span>
            </>
          ) : (
            <>
              <TrendingDownIcon sx={{ fontSize: 16 }} aria-hidden />
              <span className="percentage-mark">-</span>
            </>
          )}
          <span className="percentage-value">{absPercentage}%</span>
          <span className="sr-only">{directionText}</span>
        </span>
      </div>
    </Card>
  );
};
