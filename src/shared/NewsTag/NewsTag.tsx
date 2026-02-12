import { Tag } from './ui/styled';
import { TrendingUpIcon } from '../Icons/Icons';

interface NewsTagProps {
  count: number;
  mention: boolean;
}

const NewsTag = ({ count, mention }: NewsTagProps) => {
  return (
    <Tag>
      <TrendingUpIcon sx={{ fontSize: 12 }} />
      <span className="tag-text">
        {count} related news items
        {mention && ', surge in mentions'}
      </span>
    </Tag>
  );
};

export default NewsTag;
