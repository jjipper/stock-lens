import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: center;
  justify-content: center;
`;

const Message = styled.p`
  font-size: 20px;
  color: var(--gray-500);
`;

export { Wrapper, Message };
