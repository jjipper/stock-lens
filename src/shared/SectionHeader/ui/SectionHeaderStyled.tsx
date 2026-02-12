import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h4`
  font-size: 18px;
`;

const SubTitle = styled.p`
  font-size: 14px;
  color: var(--gray-500);
`;

export { Wrapper, Title, SubTitle };