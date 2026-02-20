import styled from 'styled-components';

const Chips = styled.ul`
  display: flex;
  gap: 8px;
`;

const Chip = styled.li``;

const ChipButton = styled.button`
  display: flex;
  gap: 4px;
  align-items: center;
  background: var(--gray-50);
  border: 1px solid transparent;
  border-radius: 20px;
  padding: 6px 12px;
  cursor: pointer;
  transition: background 0.3s ease, border-color 0.3s ease;
  user-select: none;

  &:hover {
    background: var(--gray-100);
  }

  &:focus-visible {
    border-color: var(--primary);
  }

  .name-ticker,
  .percentage {
    font-size: 14px;
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

export { Chips, Chip, ChipButton };
