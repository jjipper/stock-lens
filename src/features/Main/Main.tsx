// import { useEffect, useRef, useState } from 'react';
import type { FunctionComponent } from 'react';
import IntroSection from './components/IntroSection/IntroSection';
import IssueSection from './components/IssueSection/IssueSection';
import MyStockSection from './components/MyStockSection/MyStockSection';
import HotStockSection from './components/HotStockSection/HotStockSection';
import './Main.module.scss';

// interface DetailProps {
//   id: string;
// }

const Main: FunctionComponent = () => {
  return (
    <>
      <IntroSection />
      <IssueSection />
      <MyStockSection />
      <HotStockSection />
    </>
  );
};

export default Main;
