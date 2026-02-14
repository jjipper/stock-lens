import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 32px 26px;
  border-radius: 12px;
  background: linear-gradient(
    135deg,
    var(--primary) 20%,
    var(--primary-dark) 80%
  );
`;

const Subtitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  * {
    font-size: 18px;
    font-weight: 400;
    color: var(--white);
    opacity: 0.9;
  }
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: var(--white);
`;

const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: var(--white);
  opacity: 0.7;
`;

export { Wrapper, Subtitle, Title, Description };
