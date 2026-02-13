import styled from 'styled-components';

const Card = styled.li`
  background: var(--white);
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 14px 14px 12px;
  border-radius: 12px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: border-color 0.3s ease;

  &:hover {
    border: 1px solid var(--gray-300);
  }

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
    margin-bottom: 14px;
  }

  .EffectWrapper {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 6px;
  }
`;

const CardContent = styled.div``;

export { Card, CardContent };
