import type { FunctionComponent } from 'react';
import { SectionWrapper, SectionHeader } from 'features/layout';
import { StockList, StockCard } from 'features/Stocks';

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
          myStock={true}
          popular={true}
        />
      </StockList>
    </SectionWrapper>
  );
};

export { MyStockSection };
