import { useNavigate } from 'react-router-dom';
import { Wrapper, Message } from './NotFoundPage.styles';
import { Button } from 'features/shared';

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
