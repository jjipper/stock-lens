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
  const goToStockDetail = () => {
    navigate('/stock');
  };

  return (
    <Card onClick={goToStockDetail}>
      <dl className="stock-info">
        <dt>
          <span className="name">{name}</span>
          <span className="ticker">{ticker}</span>
        </dt>
        <dd className="main-issue">{mainIssue}</dd>
      </dl>
      <div className="stock-price">
        <span className="price">{price}원</span>
        <span className={`percentage ${percentage > 0 ? 'up' : 'down'}`}>
          {percentage > 0 ? (
            <>
              <TrendingUpIcon sx={{ fontSize: 16 }} />+
            </>
          ) : (
            <TrendingDownIcon sx={{ fontSize: 16 }} />
          )}
          {percentage}%
        </span>
      </div>
    </Card>
  );
};
