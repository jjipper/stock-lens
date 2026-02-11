// import { useEffect, useRef, useState } from 'react';
import type { FunctionComponent } from 'react';
import IntroSection from '../../features/IntroSection/IntroSection';
import IssueSection from '../../features/IssueSection/IssueSection';
import MyStockSection from '../../features/MyStockSection/MyStockSection';
import HotStockSection from '../../features/HotStockSection/HotStockSection';
import './MainPage.module.scss';

// interface DetailProps {
//   id: string;
// }

const MainPage: FunctionComponent = () => {
  return (
    <>
      <IntroSection />
      <IssueSection />
      <MyStockSection />
      <HotStockSection />
    </>
  );
};

export default MainPage;
