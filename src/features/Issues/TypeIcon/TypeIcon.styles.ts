import styled from 'styled-components';

const IconWrapper = styled.div<{ type: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-radius: 12px;
  background-color: var(--${(props) => props.type}-bg);

  * {
    color: var(--${(props) => props.type}-icon);
  }
`;

export { IconWrapper };
