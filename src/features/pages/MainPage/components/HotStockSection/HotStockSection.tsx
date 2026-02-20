import type { FunctionComponent } from 'react';
import { SectionWrapper, SectionHeader } from 'features/layout';
import { StockCard, StockList } from 'features/Stocks';

const HotStockSection: FunctionComponent = () => {
  return (
    <SectionWrapper>
      <SectionHeader title="Today's Popular Stocks" />

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

export { HotStockSection };
