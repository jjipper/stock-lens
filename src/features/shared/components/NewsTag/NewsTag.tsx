import { Tag } from './ui/styled';
import { TrendingUpIcon } from 'features/shared/ui/Icons/Icons';

interface NewsTagProps {
  newsCount: number;
  mention: boolean;
}

const NewsTag = ({ newsCount, mention }: NewsTagProps) => {
  return (
    <Tag>
      <TrendingUpIcon sx={{ fontSize: 12 }} />
      <span className="tag-text">
        {newsCount} related news items
        {mention && ', surge in mentions'}
      </span>
    </Tag>
  );
};

export default NewsTag;
