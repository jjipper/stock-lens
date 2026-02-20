import { useNavigate, useLocation } from 'react-router-dom';
import { Wrapper, LogoButton } from './Header.styles';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    }
  };

  return (
    <Wrapper>
      <LogoButton
        type="button"
        onClick={handleLogoClick}
        aria-label="메인 페이지로 이동"
      >
        Stock News Timeline
      </LogoButton>
    </Wrapper>
  );
};

export { Header };
