import TypeIcon from '../../../shared/TypeIcon/TypeIcon';
import StockChips from '../../../shared/StockChips/StockChips';
import NewsTag from '../../../shared/NewsTag/NewsTag';
import EffectTag from '../../../shared/EffectTag/EffectTag';
import { Card, CardContent } from './ui/IssueCardStyled';

interface IssueCardProps {
  type: 'memory' | 'battery' | 'ai' | 'chart' | 'money';
  stocks: { name: string; ticker: string; percentage: number }[];
}

export default function IssueCard({ type }: IssueCardProps) {
  return (
    <Card>
      <TypeIcon type={type} />

      <CardContent>
        <h5 className="title">AI 반도체 수요 급증, 국내 공급망 주목</h5>
        <p className="description">
          NVIDIA 실적 호조에 따른 국내 HBM 및 패키징 업체 수혜 전망
        </p>

        <StockChips
          stocks={[
            { name: 'SK하이닉스', ticker: 'SKH', percentage: 4.12 },
            { name: '리노공업', ticker: 'RNO', percentage: 2.34 },
            { name: '솔브레인', ticker: 'SOL', percentage: -3.21 },
          ]}
          showTicker={false}
        />

        <div className="EffectWrapper">
          <NewsTag count={12} mention={true} />
          <EffectTag effect="high" />
        </div>
      </CardContent>
    </Card>
  );
}
