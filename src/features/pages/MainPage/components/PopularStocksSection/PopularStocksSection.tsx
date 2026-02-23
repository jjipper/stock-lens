import { useState, useEffect } from 'react';
import type { FunctionComponent } from 'react';
import type { StockCardProps } from 'features/types/types';
import { SectionWrapper, SectionHeader } from 'features/layout';
import { StockCard, StockList } from 'features/Stocks';

const PopularStocksSection: FunctionComponent = () => {
  const [stocks, setStocks] = useState<StockCardProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch('/stocks')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`요청 실패: ${res.status}`);
        }
        return res.json() as Promise<StockCardProps[]>;
      })
      .then((data) => {
        const popularStocks = data.filter((item) => item.popular).slice(0, 6);
        setStocks(popularStocks);
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <SectionWrapper>Loading...</SectionWrapper>;
  if (error) return <SectionWrapper>Error: {error.message}</SectionWrapper>;

  return (
    <SectionWrapper>
      <SectionHeader title="Today's Popular Stocks" />

      <StockList>
        {stocks.map((stock) => (
          <StockCard key={stock.ticker} {...stock} />
        ))}
      </StockList>
    </SectionWrapper>
  );
};

export { PopularStocksSection };
