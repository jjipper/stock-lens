import SectionHeader from '../../shared/SectionHeader/SectionHeader';
import { IssueSectionWrapper, IssueListWrapper } from './ui/IssueSectionStyled';
import IssueCard from './IssueCard/IssueCard';

const IssueSection = () => {
  return (
    <IssueSectionWrapper>
      <SectionHeader title={'Top Trending Issues'} updateTime={'Just now'} />

      <IssueListWrapper>
        <IssueCard type="ai" />
        <IssueCard type="memory" />
      </IssueListWrapper>
    </IssueSectionWrapper>
  );
};

export default IssueSection;
