import type { ButtonProps } from 'features/types/types';

const variantClassMap = {
	primary: 'border-none bg-primary text-white hover:bg-primary-hover',
	primaryLine: 'border border-primary bg-white text-primary hover:bg-gray-50',
	gray: 'border-none bg-gray-100 font-semibold hover:bg-gray-200',
	grayLine: 'border border-gray-300 bg-white font-semibold hover:bg-gray-400',
	black: 'bg-gray-800 text-white hover:bg-black',
} as const;

const sizeClassMap = {
	sm: 'px-4 py-2 text-sm rounded-lg',
	md: 'px-4.5 py-3 text-base rounded-xl ',
	lg: 'px-5 py-3 text-lg rounded-xl',
} as const;

const widthClassMap = {
	full: 'w-full',
} as const;

export const Button = ({
	variant,
	size,
	width,
	onClick,
	children,
}: ButtonProps) => {
	const widthClass = width ? widthClassMap[width] : '';
	const sizeClass = sizeClassMap[size];
	const variantClass = variantClassMap[variant];

	return (
		<button
			type="button"
			onClick={onClick}
			className={`cursor-pointer transition-all duration-300 ${variantClass} ${sizeClass} ${widthClass}`}
		>
			{children}
		</button>
	);
};
