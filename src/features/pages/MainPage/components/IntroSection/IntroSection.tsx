import { Wrapper, Subtitle, Title, Description } from './IntroSection.styles';
import { MovingIcon } from 'features/shared/ui/Icons/Icons';

export function IntroSection() {
  return (
    <Wrapper>
      <Subtitle>
        <MovingIcon sx={{ fontSize: 24 }} />
        <span>Today's Market</span>
      </Subtitle>
      <Title>Check out the trending issues today</Title>
      <Description>
        The easiest way to understand stocks through issues
      </Description>
    </Wrapper>
  );
}
