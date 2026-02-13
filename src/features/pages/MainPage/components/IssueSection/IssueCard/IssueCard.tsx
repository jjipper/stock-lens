import TypeIcon from 'features/shared/components/TypeIcon/TypeIcon';
import StockChips from 'features/shared/components/StockChips/StockChips';
import NewsTag from 'features/shared/components/NewsTag/NewsTag';
import EffectTag from 'features/shared/components/EffectTag/EffectTag';
import { Card, CardContent } from './ui/styled';

interface IssueCardProps {
  type: 'memory' | 'battery' | 'ai' | 'chart' | 'money';
  title: string;
  description: string;
  stocks: { name: string; ticker: string; percentage: number }[];
  newsCount: number;
  mention: boolean;
  effect: 'high' | 'middle' | 'low';
}

export default function IssueCard({
  type,
  title,
  description,
  stocks,
  effect,
  newsCount,
  mention,
}: IssueCardProps) {
  return (
    <Card>
      <TypeIcon type={type} />

      <CardContent>
        <h5 className="title">{title}</h5>
        <p className="description">{description}</p>

        <StockChips showTicker={false} stocks={stocks} />

        <div className="EffectWrapper">
          <NewsTag newsCount={newsCount} mention={mention} />
          <EffectTag effect={effect} />
        </div>
      </CardContent>
    </Card>
  );
}
