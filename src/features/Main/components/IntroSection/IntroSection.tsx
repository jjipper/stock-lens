// import { useEffect, useRef, useState } from 'react';
import type { FunctionComponent } from 'react';
import './IntroSection.module.scss';

// interface DetailProps {
//   id: string;
// }

const IntroSection: FunctionComponent = () => {
  return (
    <>
      <h2>오늘의 시장</h2>
      <h3>지금 뜨는 이슈를 확인하세요</h3>
      <p>복잡한 차트 대신, 이슈로 주식을 이해하는 가장 쉬운 방법</p>
    </>
  );
};

export default IntroSection;
