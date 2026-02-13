import type { ReactNode } from 'react';
import styled from 'styled-components';

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 12px;
`;

export const StockList = ({ children }: { children: ReactNode }) => {
  return <List>{children}</List>;
};

export default StockList;
