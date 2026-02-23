import { TypeIcon } from '../TypeIcon/TypeIcon';
import { StockChips } from '../StockChips/StockChips';
import { NewsTag } from '../NewsTag/NewsTag';
import { EffectTag } from '../EffectTag/EffectTag';
import type { IssueCardProps } from 'features/types/types';
import { useNavigate } from 'react-router-dom';
import type { KeyboardEvent } from 'react';

const IssueCard = ({
  id,
  type,
  title,
  description,
  stocks,
  effect,
  newsCount,
  mention,
}: IssueCardProps) => {
  const navigate = useNavigate();
  const issuePath = `/issue/${id}`;

  const handleIssueCardClick = () => {
    navigate(issuePath);
  };

  const handleIssueCardKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      navigate(issuePath);
    }
  };

  const handleStockChipClick = (ticker: string) => {
    // TODO: 종목 상세 라우트가 준비되면 ticker 기반 이동으로 교체
    console.log('selected stock ticker:', ticker);
  };

  return (
    <li
      role="button"
      tabIndex={0}
      onClick={handleIssueCardClick}
      onKeyDown={handleIssueCardKeyDown}
      aria-label={`이슈 상세 보기: ${title}`}
      className="flex cursor-pointer items-start gap-4 rounded-xl border border-transparent bg-white px-5 py-4 transition-colors duration-300 hover:border-gray-300"
    >
      <TypeIcon type={type} />

      <div>
        <h5 className="text-lg font-bold text-gray-900">{title}</h5>
        <p className="mt-1.5 mb-2.5 text-base text-gray-700">{description}</p>

        <StockChips showTicker={false} stocks={stocks} onChipClick={handleStockChipClick} />

        <div className="mt-2 flex items-center gap-2">
          <NewsTag newsCount={newsCount} mention={mention} />
          <EffectTag effect={effect} />
        </div>
      </div>
    </li>
  );
};

export { IssueCard };
