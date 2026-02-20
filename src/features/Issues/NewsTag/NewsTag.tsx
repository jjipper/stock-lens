import { TrendingUpIcon } from 'features/shared';

interface NewsTagProps {
  newsCount: number;
  mention: boolean;
}

const NewsTag = ({ newsCount, mention }: NewsTagProps) => {
  return (
    <div className="flex w-max items-center gap-1 py-1">
      <TrendingUpIcon className="text-gray-500" sx={{ fontSize: 12 }} />
      <div className="text-sm font-normal text-gray-500">
        {newsCount}
        <span> related news items</span>
        {mention && <span>, surge in mentions</span>}
      </div>
    </div>
  );
};

export { NewsTag };
