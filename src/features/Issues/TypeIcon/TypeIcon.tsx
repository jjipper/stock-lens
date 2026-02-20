import { IconWrapper } from './TypeIcon.styles';
import {
  MemoryIcon,
  BatterySaverIcon,
  AutoAwesomeIcon,
  ShowChartIcon,
  AttachMoneyIcon,
} from 'features/shared';

interface TypeIconProps {
  type: 'memory' | 'battery' | 'ai' | 'chart' | 'money';
  fontSize?: number;
}

const IconType = {
  memory: MemoryIcon,
  battery: BatterySaverIcon,
  ai: AutoAwesomeIcon,
  chart: ShowChartIcon,
  money: AttachMoneyIcon,
};

const TypeIcon = ({ type, fontSize = 28 }: TypeIconProps) => {
  const IconComponent = IconType[type];

  return (
    <IconWrapper type={type}>
      <IconComponent sx={{ fontSize }} />
    </IconWrapper>
  );
};

export { TypeIcon };
