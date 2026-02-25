import { useMemo, useState } from 'react';
import type { StockCardProps } from 'features/types/types';
import { Button, TrendingDownIcon, TrendingUpIcon } from 'features/shared';
import { PriceRangeStats } from './components/PriceRangeStats';
import { PeriodReturnStats } from './components/PeriodReturnStats';

export const StockDetailCard = ({
  name,
  ticker,
  mainIssue,
  price,
  percentage,
}: StockCardProps) => {
  const [period, setPeriod] = useState<'week' | 'month'>('week');
  const isUp = percentage > 0;
  const directionText = isUp ? '상승' : '하락';
  const absPercentage = Math.abs(percentage);
  const formattedPrice = `${price.toLocaleString('ko-KR')}원`;

  const { lowPrice, highPrice, priceRange, weekReturn, monthReturn } = useMemo(() => {
    const calculatedRange = Math.max(
      1000,
      Math.round((price * (Math.abs(percentage) + 5)) / 100 / 1000) * 1000
    );
    const calculatedLowPrice = isUp ? price - calculatedRange : price;
    const calculatedHighPrice = isUp ? price : price + calculatedRange;

    return {
      lowPrice: calculatedLowPrice,
      highPrice: calculatedHighPrice,
      priceRange: calculatedHighPrice - calculatedLowPrice,
      weekReturn: Number((percentage * 2.1).toFixed(2)),
      monthReturn: Number((percentage * 3.8).toFixed(2)),
    };
  }, [isUp, percentage, price]);

  return (
    <article className="w-full rounded-3xl border border-gray-200 bg-white p-6 md:p-8">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-4xl font-extrabold text-gray-900 md:text-5xl">{name}</h2>
          <p className="mt-1 text-2xl font-medium text-gray-500 md:text-3xl">{ticker}</p>
        </div>
        <div className="text-right">
          <p className="text-4xl font-extrabold text-gray-900 md:text-5xl">{formattedPrice}</p>
          <p
            className={`mt-3 flex items-center justify-end text-3xl font-bold md:text-4xl ${
              isUp ? 'text-red-600' : 'text-blue-600'
            }`}
          >
            {isUp ? (
              <TrendingUpIcon sx={{ fontSize: 30, color: 'currentColor' }} aria-hidden />
            ) : (
              <TrendingDownIcon
                sx={{ fontSize: 30, color: 'currentColor' }}
                aria-hidden
              />
            )}
            <span className="ml-1" aria-hidden>
              {isUp ? '+' : '-'}
            </span>
            <span>{absPercentage}%</span>
            <span className="sr-only">{directionText}</span>
          </p>
        </div>
      </div>

      <div className="mt-8 flex gap-3">
        <button
          type="button"
          onClick={() => setPeriod('week')}
          className={`rounded-2xl px-6 py-3 text-xl font-bold transition-colors md:text-2xl ${
            period === 'week'
              ? 'bg-primary text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          1주
        </button>
        <button
          type="button"
          onClick={() => setPeriod('month')}
          className={`rounded-2xl px-6 py-3 text-xl font-bold transition-colors md:text-2xl ${
            period === 'month'
              ? 'bg-primary text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          1개월
        </button>
      </div>

      <section className="mt-6 rounded-2xl bg-gray-100 p-6">
        <div className="relative h-44 overflow-hidden rounded-xl bg-gray-100">
          <span className="absolute left-2 right-2 top-8 h-1 rounded-full bg-red-600" />
        </div>

        <PriceRangeStats
          priceRange={priceRange}
          lowPrice={lowPrice}
          highPrice={highPrice}
        />

        <PeriodReturnStats weekReturn={weekReturn} monthReturn={monthReturn} />
      </section>

      <section className="mt-6 rounded-2xl bg-gray-100 px-6 py-5">
        <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">핵심 이슈 요약</h3>
        <p className="mt-3 text-xl font-medium text-gray-700 md:text-2xl">
          {mainIssue ?? '핵심 이슈 데이터가 없습니다.'}
        </p>
      </section>

      <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
        <Button
          size="lg"
          className="w-full !rounded-2xl !border-none !bg-gray-100 !py-5 !text-2xl !font-bold !text-gray-700"
        >
          나중에 보기
        </Button>
        <Button
          variant="primary"
          size="lg"
          className="w-full !rounded-2xl !bg-[#0b1634] !py-5 !text-2xl !font-bold"
        >
          + 관심 종목 추가
        </Button>
      </div>
    </article>
  );
};
