import type { ButtonProps } from 'features/types/types';

const sizeClassMap = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-3.5 py-2 text-base',
  lg: 'px-5 py-2.5 text-lg',
};

const variantClassMap = {
  primary: 'border-none bg-primary text-white hover:bg-primary-hover',
  line: 'border border-primary bg-white text-primary',
  default: 'border border-gray-300 bg-white text-gray-700',
};

const Button = ({ children, variant, size, onClick }: ButtonProps) => {
  const sizeClass = sizeClassMap[size ?? 'md'];
  const variantClass = variantClassMap[variant ?? 'default'];

  return (
    <button
      type="button"
      onClick={onClick}
      className={`cursor-pointer rounded-md transition-all duration-300 hover:brightness-[0.98] ${sizeClass} ${variantClass}`}
    >
      {children}
    </button>
  );
};

export { Button };
