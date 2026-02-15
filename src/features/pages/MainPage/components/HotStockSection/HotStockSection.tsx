import type { FunctionComponent } from 'react';
import { SectionWrapper } from 'features/shared/layout/SectionWrapper/SectionWrapper';
import { SectionHeader } from 'features/shared/layout/SectionHeader/SectionHeader';
import { StockCard } from 'features/Stocks/StockCard/StockCard';
import { StockList } from 'features/Stocks/StockList/StockList';

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
