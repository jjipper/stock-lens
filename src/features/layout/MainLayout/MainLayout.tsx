import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col gap-5 px-6 pt-5 pb-16">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
