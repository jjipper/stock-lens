import { Tag } from './NewsTag.styles';
import { TrendingUpIcon } from 'features/shared';

interface NewsTagProps {
  newsCount: number;
  mention: boolean;
}

const NewsTag = ({ newsCount, mention }: NewsTagProps) => {
  return (
    <Tag>
      <TrendingUpIcon sx={{ fontSize: 12 }} />
      <div className="tag-text">
        {newsCount}
        <span>related news items</span>
        {mention && <span>', surge in mentions'</span>}
      </div>
    </Tag>
  );
};

export { NewsTag };
