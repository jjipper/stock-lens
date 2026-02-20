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

type Type = TypeIconProps['type'];

const TYPE_META: Record<Type, { Icon: SvgIconComponent; wrapperClass: string }> = {
  memory: { Icon: MemoryIcon, wrapperClass: 'bg-memory-bg text-memory-icon' },
  battery: {
    Icon: BatterySaverIcon,
    wrapperClass: 'bg-battery-bg text-battery-icon',
  },
  ai: { Icon: AutoAwesomeIcon, wrapperClass: 'bg-ai-bg text-ai-icon' },
  chart: { Icon: ShowChartIcon, wrapperClass: 'bg-chart-bg text-chart-icon' },
  money: { Icon: AttachMoneyIcon, wrapperClass: 'bg-money-bg text-money-icon' },
};

const TypeIcon = ({ type, fontSize = 28 }: TypeIconProps) => {
  const { Icon, wrapperClass } = TYPE_META[type];

  return (
    <div className={`inline-flex items-center justify-center rounded-xl p-3 ${wrapperClass}`}>
      <Icon sx={{ fontSize, color: 'currentColor' }} />
    </div>
  );
};

export { TypeIcon };
