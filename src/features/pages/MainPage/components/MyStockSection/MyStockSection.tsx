import type { FunctionComponent } from 'react';
import { SectionWrapper } from 'features/shared/layout/SectionWrapper/SectionWrapper';
import { SectionHeader } from 'features/shared/layout/SectionHeader/SectionHeader';
import { StockList } from 'features/Stocks/StockList/StockList';
import { StockCard } from 'features/Stocks/StockCard/StockCard';

const MyStockSection: FunctionComponent = () => {
  return (
    <SectionWrapper>
      <SectionHeader title="My Stocks" />

      <StockList>
        <StockCard
          name={'삼성전자'}
          ticker={'005930'}
          mainIssue={'갤럭시 S25 출시 임박, 사전예약 시작'}
          price={73000}
          percentage={1.39}
        />
        <StockCard
          name={'SK하이닉스'}
          ticker={'000660'}
          mainIssue={'NVIDIA AI칩 HBM 독점 공급 계약 체결'}
          price={215000}
          percentage={4.12}
        />
        <StockCard
          name={'LG에너지솔루션'}
          ticker={'373220'}
          price={420000}
          percentage={-1.18}
        />
      </StockList>
    </SectionWrapper>
  );
};

export { MyStockSection };
