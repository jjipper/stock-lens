import { IntroSection } from './components/IntroSection/IntroSection';
import { IssueSection } from './components/IssueSection/IssueSection';
import { MyStockSection } from './components/MyStockSection/MyStockSection';
import { PopularStocksSection } from './components/PopularStocksSection/PopularStocksSection';

const MainPage = () => {
  return (
    <>
      <IntroSection />
      <IssueSection />
      <PopularStocksSection />
      <MyStockSection />
    </>
  );
};

export default MainPage;
