import { StyledButton } from './Button.styles';
import type { ButtonProps } from './Button.types';

const Button = ({ children, variant, size, onClick }: ButtonProps) => {
  return (
    <StyledButton variant={variant} size={size} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export { Button };
