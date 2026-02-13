import type { ReactNode } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SectionWrapper = ({ children }: { children: ReactNode }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default SectionWrapper;
