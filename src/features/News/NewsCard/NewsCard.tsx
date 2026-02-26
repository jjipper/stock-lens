import type { NewsListItem } from 'features/types/types';

export const NewsCard = ({
	imageUrl,
	title,
	source,
	publishedAt,
}: NewsListItem) => {
	return (
		<div className="cursor-pointer overflow-hidden rounded-xl border border-gray-100 bg-white">
			<div className="h-60 overflow-hidden">
				<img src={imageUrl} />
			</div>
			<div className="p-4">
				<h3 className="text-md font-medium">{title}</h3>
				<div className="flex items-center gap-2">
					<p className="text-sm font-medium text-gray-700">{source}</p>
					<p className="text-xs text-gray-500">{publishedAt}</p>
				</div>
			</div>
		</div>
	);
};
