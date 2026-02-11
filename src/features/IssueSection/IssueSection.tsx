// import { useEffect, useRef, useState } from 'react';
import type { FunctionComponent } from 'react';
import SectionHeader from '../../shared/ui/SectionHeader';
import './IssueSection.module.scss';

interface DetailProps {
  title: string;
  lastUpdate: string;
}

const IssueSection: FunctionComponent<DetailProps> = () => {
  return (
    <>
      <SectionHeader title={'냐냐'} lastUpdate={'냐냐'} />

      <div className="section-header">
        <h4>실시간 인기 이슈 TOP</h4>
        <p>최근 업데이트 : 방금 전</p>
      </div>

      <ul>
        <li>
          <img src="#" alt="Icon" />
          <h5>AI 반도체 수요 급증, 국내 공급망 주목</h5>
          <p>NVIDIA 실적 호조에 따른 국내 HBM 및 패키징 업체 수혜 전망</p>
          <ul>
            <li>
              <span>SK하이닉스</span>
              <span>+4.12%</span>
            </li>
            <li>
              <span>SK하이닉스</span>
              <span>+4.12%</span>
            </li>
            <li>
              <span>SK하이닉스</span>
              <span>+4.12%</span>
            </li>
          </ul>
          <div>
            <div>관련 뉴스 12건, 언급량 급증</div>
            <div>영향도 상</div>
          </div>
        </li>

        <li>
          <img src="#" alt="Icon" />
          <h5>2차전지 소재주, 北미 IRA 수혜 본격화</h5>
          <p>
            미국 인플레이션 감축법에 따른 국내 2차전지 소재 기업들의 북미 공장
            가동 시작
          </p>
          <ul>
            <li>
              <span>SK하이닉스</span>
              <span>+4.12%</span>
            </li>
            <li>
              <span>SK하이닉스</span>
              <span>+4.12%</span>
            </li>
            <li>
              <span>SK하이닉스</span>
              <span>+4.12%</span>
            </li>
          </ul>
          <div>
            <div>관련 뉴스 12건, 언급량 급증</div>
            <div>영향도 상</div>
          </div>
        </li>
      </ul>
    </>
  );
};

export default IssueSection;
