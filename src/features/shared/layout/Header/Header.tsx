import { useNavigate, useLocation } from 'react-router-dom';
import { Wrapper, Logo } from './Header.styles';

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
      <Logo onClick={handleLogoClick}>Stock News Timeline</Logo>
    </Wrapper>
  );
};

export { Header };
