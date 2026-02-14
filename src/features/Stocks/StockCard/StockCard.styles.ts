import styled from 'styled-components';

const Card = styled.div`
  background: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 16px 20px 12px;
  border-radius: 12px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: border-color 0.3s ease;

  &:hover {
    border: 1px solid var(--gray-300);
  }

  .stock-info {
    display: flex;
    flex-direction: column;
    gap: 6px;

    dt {
      display: flex;
      align-items: center;
      gap: 4px;

      .name {
        font-size: 20px;
        font-weight: 600;
        color: var(--gray-900);
      }

      .ticker {
        font-size: 14px;
        color: var(--gray-400);
      }
    }

    .main-issue {
      font-size: 16px;
      font-weight: 400;
      color: var(--gray-700);
    }
  }

  .stock-price {
    display: flex;
    flex-direction: column;
    gap: 2px;
    text-align: right;

    .price {
      font-size: 18px;
      font-weight: 600;
      color: var(--gray-800);
    }

    .percentage {
      font-size: 16px;
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 4px;

      &.up {
        color: var(--red-500);
        * {
          color: var(--red-500);
        }
      }

      &.down {
        color: var(--blue-500);
        * {
          color: var(--blue-500);
        }
      }
    }
  }
`;

export { Card };
