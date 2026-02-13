import { IntroSection } from './components/IntroSection/IntroSection';
import { IssueSection } from './components/IssueSection/IssueSection';
import { MyStockSection } from './components/MyStockSection/MyStockSection';
import { HotStockSection } from './components/HotStockSection/HotStockSection';

const MainPage = () => {
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
