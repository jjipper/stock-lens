import { useNavigate, useLocation } from 'react-router-dom';
import { Wrapper, Logo } from './Header.styles';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToMain = () => {
    if (location.pathname !== '/') {
      navigate('/');
    }
    return;
  };

  return (
    <Wrapper>
      <Logo onClick={goToMain}>Stock News Timeline</Logo>
    </Wrapper>
  );
};

export { Header };
