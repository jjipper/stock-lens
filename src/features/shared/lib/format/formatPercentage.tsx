import type { SvgIconComponent } from '@mui/icons-material';

import { TrendingDownIcon, TrendingUpIcon } from '../../ui/Icons/Icons';

type percentageProps = 'zero' | 'up' | 'down';

const percentageMeta = {
	zero: {
		color: 'text-gray-500',
		mark: '',
		srText: '',
	},
	up: {
		Icon: TrendingUpIcon,
		color: 'text-red-500',
		mark: '+',
		srText: 'up',
	},
	down: {
		Icon: TrendingDownIcon,
		color: 'text-blue-500',
		mark: '-',
		srText: 'down',
	},
} as const satisfies Record<
	percentageProps,
	{ Icon?: SvgIconComponent; color: string; mark: string; srText: string }
>;

export const formatPercentage = (percentage: number) => {
	const getType = (percentage: number) => {
		if (percentage === 0) return 'zero';
		if (percentage > 0) return 'up';
		return 'down';
	};
	const meta = percentageMeta[getType(percentage)];

	return (
		<span
			className={`flex items-center justify-end text-sm font-semibold ${meta.color}`}
		>
			{'Icon' in meta ? (
				<meta.Icon sx={{ fontSize: 14, color: 'currentColor' }} aria-hidden />
			) : null}
			<span className="ml-1" aria-hidden>
				{meta.mark}
			</span>
			<span className="sr-only">{meta.srText}</span>
			<span>{Math.abs(percentage)}%</span>
		</span>
	);
};
