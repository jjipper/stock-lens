import styled from 'styled-components';

const Wrapper = styled.header`
  height: 62px;
  background: #fff;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  padding: 0 24px;
`;

const LogoButton = styled.button`
  font-size: 24px;
  font-weight: 700;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 6px;
`;

export { Wrapper, LogoButton };
