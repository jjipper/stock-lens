import { useNavigate } from 'react-router-dom';
import { Wrapper, Message } from './ui/NotFoundStyled';
import { Button } from '../../shared/Button/Button';

const NotFound = () => {
  const navigate = useNavigate();
  function goToMain() {
    navigate('/');
  }

  return (
    <Wrapper>
      <Message>The page does not exist</Message>
      <Button variant='primary' size='lg' onClick={goToMain}>Go To Main</Button>
    </Wrapper>
  );
};

export default NotFound;
