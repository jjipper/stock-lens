import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 24px 22px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--primary) 20%, var(--primary-dark) 80%);
`;

const Subtitle = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  * {
    font-size: 12px;
    font-weight: 400;
    color: var(--white);
    opacity: 0.9;
  }
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: var(--white);
`;

const Description = styled.p`
  font-size: 12px;
  font-weight: 300;
  color: var(--white);
  opacity: 0.7;
`;

export { Wrapper, Subtitle, Title, Description };