import type { FunctionComponent } from 'react';
import SectionHeader from 'features/shared/components/SectionHeader/SectionHeader';

const HotStockSection: FunctionComponent = () => {
  return (
    <>
      <SectionHeader title="Today's Popular Stocks" />
      <ul>
        <li>
          <h6>
            삼성전자<span>005930</span>
          </h6>
          <span>73,000원</span>
          <p>갤럭시 S25 출시 임박, 사전예약 시작</p>
          <span>+1.39%</span>
        </li>

        <li>
          <h6>
            삼성전자<span>005930</span>
          </h6>
          <span>73,000원</span>
          <p>갤럭시 S25 출시 임박, 사전예약 시작</p>
          <span>+1.39%</span>
        </li>
        <li>
          <h6>
            삼성전자<span>005930</span>
          </h6>
          <span>73,000원</span>
          <p>갤럭시 S25 출시 임박, 사전예약 시작</p>
          <span>+1.39%</span>
        </li>
      </ul>
    </>
  );
};

export default HotStockSection;
