import { IconWrapper } from './ui/styled';
import {
  MemoryIcon,
  BatterySaverIcon,
  AutoAwesomeIcon,
  ShowChartIcon,
  AttachMoneyIcon,
} from 'features/shared/ui/Icons/Icons';

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

const TypeIcon = ({ type, fontSize = 20 }: TypeIconProps) => {
  const IconComponent = IconType[type];

  return (
    <IconWrapper type={type}>
      <IconComponent sx={{ fontSize }} />
    </IconWrapper>
  );
};

export default TypeIcon;
