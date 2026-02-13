import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Title = styled.h4`
  font-size: 16px;
`;

const SubTitle = styled.p`
  font-size: 10px;
  color: var(--gray-400);
`;

export { Wrapper, Title, SubTitle };
