import type { ButtonProps } from 'features/types/types';

const variantClassMap = {
	primary:
		'border border-primary/70 bg-linear-to-r from-primary to-primary-dark text-white shadow-soft hover:-translate-y-0.5 hover:brightness-105 hover:shadow-card',
	primaryLine:
		'border border-primary/75 bg-white/92 text-primary shadow-soft hover:-translate-y-0.5 hover:bg-primary/5',
	gray: 'border border-slate-200/80 bg-slate-100/85 font-semibold text-slate-700 shadow-soft hover:-translate-y-0.5 hover:bg-slate-200/85',
	grayLine:
		'border border-slate-300/80 bg-white/90 font-semibold text-slate-700 shadow-soft hover:-translate-y-0.5 hover:bg-slate-100',
	black:
		'border border-slate-900 bg-slate-900 text-white shadow-soft hover:-translate-y-0.5 hover:bg-black',
} as const;

const sizeClassMap = {
	sm: 'px-4 py-2 text-sm rounded-lg',
	md: 'px-4.5 py-3 text-base rounded-lg',
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
