import { SectionWrapper } from 'features/shared/layout/SectionWrapper/SectionWrapper';
import { SectionHeader } from 'features/shared/layout/SectionHeader/SectionHeader';
import { IssueCard } from 'features/Issues/IssueCard/IssueCard';
import { IssueListWrapper } from './IssueSection.styles';

const IssueSection = () => {
  return (
    <SectionWrapper>
      <SectionHeader title={'Top Trending Issues'} updateTime={'Just now'} />

      <IssueListWrapper>
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

        <IssueCard
          type="memory"
          title="2차전지 소재주, 北미 IRA 수혜 본격화"
          description="미국 인플레이션 감축법에 따른 국내 2차전지 소재 기업들의 북미 공장 가동 시작"
          stocks={[
            { name: 'LG에너지솔루션', ticker: '003550', percentage: -1.12 },
            { name: 'SK이노베이션', ticker: '096770', percentage: 2.34 },
            { name: '에코프로', ticker: '086520', percentage: 4.15 },
          ]}
          newsCount={8}
          mention={false}
          effect="middle"
        />

        <IssueCard
          type="money"
          title="금리 인하 기대감에 건설·부동산주 강세"
          description="한국은행 기준금리 인하 가능성 부각되며 건설·부동산 관련주 동반 상승"
          stocks={[
            { name: '현대건설', ticker: '000100', percentage: 3.12 },
            { name: '삼성물산', ticker: '005380', percentage: 2.46 },
            { name: '디타임', ticker: '012510', percentage: 6.2 },
          ]}
          newsCount={4}
          mention={false}
          effect="low"
        />
      </IssueListWrapper>
    </SectionWrapper>
  );
};

export { IssueSection };
