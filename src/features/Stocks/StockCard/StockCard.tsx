import type { StockCardProps } from 'features/types/types';
import { TrendingUpIcon, TrendingDownIcon } from 'features/shared';
import { useNavigate } from 'react-router-dom';

export const StockCard = ({ name, ticker, mainIssue, price, percentage }: StockCardProps) => {
  const navigate = useNavigate();
  const isUp = percentage > 0;
  const directionText = isUp ? '상승' : '하락';
  const absPercentage = Math.abs(percentage);

  const handleStockCardClick = () => {
    navigate('/stock');
  };

  return (
    <button
      type="button"
      onClick={handleStockCardClick}
      aria-label={`${name} ${ticker} 상세 보기. 현재가 ${price}원, ${directionText} ${absPercentage}%`}
      className="flex w-full cursor-pointer items-center justify-between gap-3 rounded-xl border border-transparent bg-white px-5 py-4 text-left transition-colors duration-300 hover:border-gray-300"
    >
      <dl className="flex flex-col gap-0.5">
        <dt>
          <span className="text-lg font-semibold text-gray-900">{name}</span>
          <span className="ml-1.5 text-xs text-gray-300">{ticker}</span>
        </dt>
        <dd className="text-sm font-normal text-gray-600">{mainIssue}</dd>
      </dl>
      <div className="flex flex-col text-right">
        <span className="text-lg font-semibold text-gray-800">{price}원</span>
        <span
          className={`flex items-center justify-end text-sm font-semibold ${
            isUp ? 'text-red-500' : 'text-blue-500'
          }`}
        >
          {isUp ? (
            <>
              <TrendingUpIcon sx={{ fontSize: 14, color: 'currentColor' }} aria-hidden />
              <span className="ml-1" aria-hidden>
                +
              </span>
            </>
          ) : (
            <>
              <TrendingDownIcon sx={{ fontSize: 14, color: 'currentColor' }} aria-hidden />
              <span className="ml-1" aria-hidden>
                -
              </span>
            </>
          )}
          <span>{absPercentage}%</span>
          <span className="sr-only">{directionText}</span>
        </span>
      </div>
    </button>
  );
};
