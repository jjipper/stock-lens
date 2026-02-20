import { TypeIcon } from '../TypeIcon/TypeIcon';
import { StockChips } from '../StockChips/StockChips';
import { NewsTag } from '../NewsTag/NewsTag';
import { EffectTag } from '../EffectTag/EffectTag';
import { CardItem, CardContent } from './IssueCard.styles';
import type { IssueCardProps } from 'features/types/types';
import { useNavigate } from 'react-router-dom';
import type { KeyboardEvent } from 'react';

const IssueCard = ({
  type,
  title,
  description,
  stocks,
  effect,
  newsCount,
  mention,
}: IssueCardProps) => {
  const navigate = useNavigate();
  const handleIssueCardClick = () => {
    navigate('/issue');
  };

  const handleIssueCardKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      navigate('/issue');
    }
  };

  const handleStockChipClick = (ticker: string) => {
    // TODO: 종목 상세 라우트가 준비되면 ticker 기반 이동으로 교체
    console.log('selected stock ticker:', ticker);
  };

  return (
    <CardItem
      role="button"
      tabIndex={0}
      onClick={handleIssueCardClick}
      onKeyDown={handleIssueCardKeyDown}
      aria-label={`이슈 상세 보기: ${title}`}
    >
      <TypeIcon type={type} />

      <CardContent>
        <h5 className="title">{title}</h5>
        <p className="description">{description}</p>

        <StockChips
          showTicker={false}
          stocks={stocks}
          onChipClick={handleStockChipClick}
        />

        <div className="EffectWrapper">
          <NewsTag newsCount={newsCount} mention={mention} />
          <EffectTag effect={effect} />
        </div>
      </CardContent>
    </CardItem>
  );
};

export { IssueCard };
