import styled from 'styled-components';

const Chips = styled.ul`
  display: flex;
  gap: 8px;
`;

const Chip = styled.li`
  display: flex;
  gap: 4px;
  align-items: center;
  background: var(--gray-50);
  border-radius: 20px;
  padding: 4px 8px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: var(--gray-100);
  }

  .name-ticker,
  .percentage {
    font-size: 10px;
    font-weight: 500;
  }

  .percentage {
    font-weight: 600;
    &.up {
      color: var(--red-500);
    }
    &.down {
      color: var(--blue-500);
    }
  }
`;

export { Chips, Chip };
