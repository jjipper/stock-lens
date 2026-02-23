import { useEffect, useState, type FunctionComponent } from 'react';
import type { StockCardProps } from 'features/types/types';
import { SectionEmpty } from 'features/layout';
import { StockList, StockCard } from 'features/Stocks';

const StockPage: FunctionComponent = () => {
  const [stocks, setStocks] = useState<StockCardProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/stocks')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`요청 실패: ${res.status}`);
        }
        return res.json() as Promise<StockCardProps[]>;
      })
      .then((data) => {
        return setStocks(data);
      })
      .catch((err: unknown) => {
        setError(err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.');
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (setStocks.length === 0) return <SectionEmpty />;

  return (
    <StockList>
      {stocks.map((stock) => (
        <StockCard key={stock.ticker} {...stock} />
      ))}
    </StockList>
  );
};

export default StockPage;
