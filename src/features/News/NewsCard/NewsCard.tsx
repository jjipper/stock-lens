import type { NewsCardProps } from 'features/types/types';

export const NewsCard = ({
	imageUrl,
	title,
	source,
	publishedAt,
	onClick,
}: NewsCardProps) => {
	return (
		<button
			type="button"
			onClick={onClick}
			className="group rounded-panel shadow-soft hover:shadow-card w-full cursor-pointer overflow-hidden border border-slate-200/80 bg-white/92 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300"
		>
			<div className="h-56 overflow-hidden sm:h-60">
				<img
					src={imageUrl}
					alt={title}
					className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
				/>
			</div>
			<div className="flex flex-col gap-1 px-5 py-4 sm:px-6">
				<h3 className="text-base leading-snug font-semibold tracking-tight text-slate-900">
					{title}
				</h3>
				<div className="flex items-center gap-2 text-xs text-slate-500 sm:text-sm">
					<p className="font-medium text-slate-600">{source}</p>
					<span className="text-slate-300">|</span>
					<p>{publishedAt}</p>
				</div>
			</div>
		</button>
	);
};
