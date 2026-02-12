import { Wrapper, Subtitle, Title, Description } from './ui/IntroSectionStyled';
import { MovingIcon } from '../Icons/Icons';

export default function IntroSection() {
  return (
    <Wrapper>
      <Subtitle>
        <MovingIcon sx={{ fontSize: 16 }} />
        <span>Today's Market</span>
      </Subtitle>
      <Title>Check out the trending issues today</Title>
      <Description>
        Instead of complicated charts, the easiest way to understand stocks
        through issues
      </Description>
    </Wrapper>
  );
}
