import styled from 'styled-components';

const CardItem = styled.li`
  background: var(--white);
  display: flex;
  align-items: flex-start;
  gap: 18px;
  padding: 18px 20px 14px;
  border-radius: 12px;
  border: 1px solid transparent;
  transition: border-color 0.3s ease;
  cursor: pointer;
  user-select: none;

  &:hover,
  &:has(button:focus-visible) {
    border: 1px solid var(--gray-300);
  }

  &:focus-visible {
    border: 1px solid var(--gray-300);
  }
`;

const CardContent = styled.div`
  .title {
    font-size: 20px;
    font-weight: 700;
    color: var(--gray-900);
  }
  .description {
    font-size: 16px;
    font-weight: 400;
    color: var(--gray-700);
    margin-top: 6px;
    margin-bottom: 10px;
  }

  .EffectWrapper {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 8px;
  }
`;

export { CardItem, CardContent };
