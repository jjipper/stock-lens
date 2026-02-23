import { useState, useEffect } from 'react';
import type { FunctionComponent } from 'react';
import type { StockCardProps } from 'features/types/types';
import { SectionWrapper, SectionHeader } from 'features/layout';
import { StockList, StockCard } from 'features/Stocks';

const MyStockSection: FunctionComponent = () => {
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
        const myStocks = data.filter((item) => item.myStock).slice(0, 4);
        setStocks(myStocks);
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <SectionWrapper>Loading...</SectionWrapper>;
  if (error) return <SectionWrapper>Error: {error.message}</SectionWrapper>;

  return (
    <SectionWrapper>
      <SectionHeader title="My Stocks" />

      <StockList>
        {stocks.map((stock) => (
          <StockCard key={stock.ticker} {...stock} />
        ))}
      </StockList>
    </SectionWrapper>
  );
};

export { MyStockSection };
