import { Card } from './ui/styled';
import { TrendingUpIcon, TrendingDownIcon } from '../../ui/Icons/Icons';
import { useNavigate } from 'react-router-dom';

interface StockCardProps {
  name: string;
  ticker: string | number;
  mainIssue?: string;
  price: number;
  percentage: number;
}

export const StockCard = ({
  name,
  ticker,
  mainIssue,
  price,
  percentage,
}: StockCardProps) => {
  const navigate = useNavigate();
  function goToStockDetail() {
    navigate('/stock');
  }

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
              <TrendingUpIcon sx={{ fontSize: 12 }} />+
            </>
          ) : (
            <TrendingDownIcon sx={{ fontSize: 12 }} />
          )}
          {percentage}%
        </span>
      </div>
    </Card>
  );
};

export default StockCard;
