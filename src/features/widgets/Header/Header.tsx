import { useNavigate } from 'react-router-dom';
import { Wrapper, Logo } from './ui/styled';

const Header = () => {
  const navigate = useNavigate();
  function goToMain() {
    navigate('/');
  }

  return (
    <Wrapper>
      <Logo onClick={goToMain}>Stock News Timeline</Logo>
    </Wrapper>
  );
};

export default Header;
