import TypeIcon from '../../../shared/TypeIcon/TypeIcon';
import StockChips from '../../../shared/StockChips/StockChips';
import NewsTag from '../../../shared/NewsTag/NewsTag';
import EffectTag from '../../../shared/EffectTag/EffectTag';
import { Card, CardContent } from './ui/IssueCardStyled';

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
