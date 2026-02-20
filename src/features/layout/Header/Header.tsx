import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    }
  };

  return (
    <header className="flex h-16 items-center border-b border-gray-300 bg-white px-6">
      <button
        type="button"
        onClick={handleLogoClick}
        aria-label="메인 페이지로 이동"
        className="cursor-pointer rounded-md border-none bg-transparent text-2xl font-bold"
      >
        Stock News Timeline
      </button>
    </header>
  );
};

export { Header };
