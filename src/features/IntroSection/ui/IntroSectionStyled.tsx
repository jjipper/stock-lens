import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 28px 24px;
  border-radius: 12px;
  background: linear-gradient(to left, var(--secondary), var(--secondary-hover));
`;

const Subtitle = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  * {
    font-size: 12px;
    font-weight: 400;
    color: var(--white);
  }
`;

const Title = styled.h2`
  font-size: 22px;
  color: var(--white);
`;

const Description = styled.p`
  font-size: 12px;
  color: var(--white);
`;

export { Wrapper, Subtitle, Title, Description };