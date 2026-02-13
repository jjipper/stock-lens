export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'line';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}
