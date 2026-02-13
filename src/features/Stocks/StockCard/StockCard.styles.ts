import styled from 'styled-components';

const Card = styled.div`
  background: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 14px 12px;
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
        font-size: 14px;
        font-weight: 600;
        color: var(--gray-900);
      }

      .ticker {
        font-size: 10px;
        color: var(--gray-400);
      }
    }

    .main-issue {
      font-size: 12px;
      font-weight: 300;
      color: var(--gray-700);
    }
  }

  .stock-price {
    display: flex;
    flex-direction: column;
    gap: 4px;
    text-align: right;

    .price {
      font-size: 14px;
      font-weight: 600;
    }

    .percentage {
      font-size: 10px;
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 2px;

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
