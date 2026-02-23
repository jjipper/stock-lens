import { useEffect, useState, type FunctionComponent } from 'react';
import { useOutletContext } from 'react-router-dom';
import type { StockCardProps, AppBarOutletContext } from 'features/types/types';
import { SectionEmpty } from 'features/layout';
import { StockList, StockCard } from 'features/Stocks';

const StockPage: FunctionComponent = () => {
  // 주식 목록 렌더링
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

  // app bar Layout 타이틀 설정
  const { setAppBarTitle } = useOutletContext<AppBarOutletContext>();

  useEffect(() => {
    setAppBarTitle('주식 목록');
  }, [setAppBarTitle]);

  // 로딩, 에러, 404 분기
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
