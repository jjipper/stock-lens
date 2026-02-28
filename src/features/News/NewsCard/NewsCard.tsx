import type { NewsListItem } from 'features/types/types';

export const NewsCard = ({
	imageUrl,
	title,
	source,
	publishedAt,
	onClick,
}: NewsListItem) => {
	return (
		<button
			type="button"
			onClick={onClick}
			className="w-full cursor-pointer overflow-hidden rounded-xl border border-gray-100 bg-white text-left"
		>
			<div className="h-60 overflow-hidden">
				<img
					src={imageUrl}
					alt={title}
					className="h-full w-full object-cover"
				/>
			</div>
			<div className="flex flex-col gap-0.5 px-5 py-4">
				<h3 className="text-md font-medium">{title}</h3>
				<div className="flex items-center gap-2">
					<p className="text-sm text-gray-600">{source}</p>
					<span className="text-xs text-gray-300">|</span>
					<p className="text-xs text-gray-600">{publishedAt}</p>
				</div>
			</div>
		</button>
	);
};
