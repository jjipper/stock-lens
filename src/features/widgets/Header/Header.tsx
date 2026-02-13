import { useNavigate, useLocation } from 'react-router-dom';
import { Wrapper, Logo } from './ui/styled';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  function goToMain() {
    if (location.pathname !== '/') {
      navigate('/');
    }
    return;
  }

  return (
    <Wrapper>
      <Logo onClick={goToMain}>Stock News Timeline</Logo>
    </Wrapper>
  );
};

export default Header;
