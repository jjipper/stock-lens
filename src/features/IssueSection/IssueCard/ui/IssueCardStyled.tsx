import styled from 'styled-components';

const Card = styled.li`
  background: var(--white);
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 20px 24px;
  border-radius: 12px;

  .title {
    font-size: 14px;
    font-weight: 700;
    color: var(--gray-900);
  }
  .description {
    font-size: 12px;
    font-weight: 400;
    color: var(--gray-500);
    margin-top: 6px;
    margin-bottom: 8px;
  }

  .EffectWrapper {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-top: 8px;
  }
`;

const CardContent = styled.div``;

export { Card, CardContent };
