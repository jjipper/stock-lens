import { Wrapper, Title, SubTitle } from './SectionHeader.styles';

const SectionHeader = ({
  title,
  updateTime,
}: {
  title: string;
  updateTime?: string;
}) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {updateTime && <SubTitle>Last update: {updateTime}</SubTitle>}
    </Wrapper>
  );
};

export { SectionHeader };
