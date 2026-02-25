import { useParams, useOutletContext } from 'react-router-dom';
import { useEffect, useState, type FunctionComponent } from 'react';
import { StockCard } from 'features/Stocks';
import { NotFoundPage } from 'features/layout';
import type { StockCardProps, AppBarOutletContext } from 'features/types/types';

export const StockDetailPage: FunctionComponent = () => {
  const { ticker } = useParams();
  const [stock, setStock] = useState<StockCardProps | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!ticker) return;

    fetch(`/stocks/${ticker}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`요청 실패: ${res.status}`);
        }
        return res.json() as Promise<StockCardProps>;
      })
      .then((data) => {
        setStock(data);
      })
      .catch((err: unknown) => {
        setError(
          err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.'
        );
      })
      .finally(() => setIsLoading(false));
  }, [ticker]);

  // app bar Layout 타이틀 설정
  const { setAppBarTitle } = useOutletContext<AppBarOutletContext>();

  useEffect(() => {
    setAppBarTitle(`${stock?.name}`);
  }, [stock, setAppBarTitle]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!stock) return <NotFoundPage />;

  return (
    <ul className="flex flex-col gap-4">
      <StockCard {...stock} />
    </ul>
  );
};

export default StockDetailPage;
