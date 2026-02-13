import type { FunctionComponent } from 'react';
import { IssueCard } from 'features/Issues/IssueCard/IssueCard';

const IssuePage: FunctionComponent = () => {
  return (
    <>
      <IssueCard
        type="ai"
        title="AI 반도체 수요 급증, 국내 공급망 주목"
        description="NVIDIA 실적 호조에 따른 국내 HBM 및 패키징 업체 수혜 전망"
        stocks={[
          { name: 'SK하이닉스', ticker: '000660', percentage: 4.12 },
          { name: '리노공업', ticker: '051910', percentage: 2.34 },
          { name: '솔브레인', ticker: '028260', percentage: -3.21 },
        ]}
        newsCount={12}
        mention={true}
        effect="high"
      />
    </>
  );
};

export default IssuePage;
