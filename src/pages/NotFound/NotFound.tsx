import { useNavigate } from 'react-router-dom';
import { Wrapper, Message, Button } from './NotFoundStyled';

const NotFound = () => {
  const navigate = useNavigate();
  function goToMain() {
    navigate('/');
  }

  return (
    <Wrapper>
      <Message>존재하지 않는 페이지입니다.</Message>
      <Button onClick={goToMain}>Go To Main</Button>
    </Wrapper>
  );
};

export default NotFound;
