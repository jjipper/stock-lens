import { TrendingUpIcon } from 'features/shared';

interface NewsTagProps {
	newsCount: number;
	mention: boolean;
}

export const NewsTag = ({ newsCount, mention }: NewsTagProps) => {
	return (
		<div className="inline-flex w-max items-center gap-1 rounded-full border border-slate-200/80 bg-slate-50/70 px-2.5 py-1.5">
			<TrendingUpIcon className="text-slate-500" sx={{ fontSize: 12 }} />
			<div className="text-xs font-medium text-slate-500">
				{newsCount}
				<span> related news items</span>
				{mention && <span>, surge in mentions</span>}
			</div>
		</div>
	);
};
