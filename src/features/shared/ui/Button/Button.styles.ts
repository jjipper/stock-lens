import styled from 'styled-components';
import type { ButtonProps } from './Button.types';

const sizeStyles = {
  sm: {
    padding: '6px 12px',
    fontSize: '12px',
  },
  md: {
    padding: '8px 14px',
    fontSize: '14px',
  },
  lg: {
    padding: '10px 18px',
    fontSize: '16px',
  },
};

const StyledButton = styled.button<ButtonProps>`
  padding: ${(props) => sizeStyles[props.size || 'md'].padding};
  font-size: ${(props) => sizeStyles[props.size || 'md'].fontSize};
  border-radius: 6px;
  border: 1px solid var(--gray-300);
  background-color: var(--white);
  color: var(--gray-700);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    filter: brightness(0.98);
  }

  ${(props) =>
    props.variant === 'primary' &&
    `
    background-color: var(--primary);
    border: none;
    color: white;

    &:hover {
      background-color: var(--primary-hover);
    }
  `}

  ${(props) =>
    props.variant === 'line' &&
    `
    border: 1px solid var(--primary);
    color: var(--primary);
  `}
`;

export { StyledButton };
