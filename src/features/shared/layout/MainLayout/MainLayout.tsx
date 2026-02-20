import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="content-wrapper">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
