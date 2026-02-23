import { Outlet, useNavigate } from 'react-router-dom';
import { Header } from '../Header/Header';
import { ArrowBackIcon } from 'features/shared';

const AppBarLayout = () => {
  const navigate = useNavigate();
  const handleBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <>
      <Header />
      <nav className="flex items-center gap-2 py-2 px-4 border-b border-gray-100 bg-white">
        <button
          onClick={handleBackButtonClick}
          className="cursor-pointer w-10 h-10 rounded-md hover:bg-gray-50"
        >
          <ArrowBackIcon sx={{ fontSize: 20 }} className="text-gray-600" />
        </button>
        <h1 className="text-lg font-bold">이슈 상세</h1>
      </nav>
      <div className="flex flex-col gap-5 px-6 pt-5 pb-16">
        <Outlet />
      </div>
    </>
  );
};

export { AppBarLayout };
