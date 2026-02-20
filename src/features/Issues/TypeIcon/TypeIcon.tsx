import type { SvgIconComponent } from '@mui/icons-material';
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

const IconType: Record<TypeIconProps['type'], SvgIconComponent> = {
  memory: MemoryIcon,
  battery: BatterySaverIcon,
  ai: AutoAwesomeIcon,
  chart: ShowChartIcon,
  money: AttachMoneyIcon,
};

const iconWrapperClassMap: Record<TypeIconProps['type'], string> = {
  memory: 'bg-memory-bg text-memory-icon',
  battery: 'bg-battery-bg text-battery-icon',
  ai: 'bg-ai-bg text-ai-icon',
  chart: 'bg-chart-bg text-chart-icon',
  money: 'bg-money-bg text-money-icon',
};

const TypeIcon = ({ type, fontSize = 28 }: TypeIconProps) => {
  const IconComponent = IconType[type];

  return (
    <div
      className={`inline-flex items-center justify-center rounded-xl p-3 ${iconWrapperClassMap[type]}`}
    >
      <IconComponent sx={{ fontSize, color: 'currentColor' }} />
    </div>
  );
};

export { TypeIcon };
