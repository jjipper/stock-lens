import { useNavigate } from 'react-router-dom';
import { Wrapper, Message } from './ui/styled';
import { Button } from 'features/shared/ui/Button/Button';

const NotFoundPage = () => {
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

export default NotFoundPage;
