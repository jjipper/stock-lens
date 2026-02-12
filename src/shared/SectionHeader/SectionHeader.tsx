import { Wrapper, Title, SubTitle } from './ui/SectionHeaderStyled';

const SectionHeader = ({
  title,
  updateTime,
}: {
  title: string;
  updateTime: string;
}) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <SubTitle>Last update: {updateTime}</SubTitle>
    </Wrapper>
  );
};

export default SectionHeader;
