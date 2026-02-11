// import { useEffect, useRef, useState } from 'react';
import type { FunctionComponent } from 'react';
import './HotStockSection.module.scss';

// interface DetailProps {
//   id: string;
// }

const HotStockSection: FunctionComponent = () => {
  return (
    <>
      <div className="section-header">
        <h4>실시간 인기 이슈 TOP</h4>
        <p>최근 업데이트 : 방금 전</p>
      </div>
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
