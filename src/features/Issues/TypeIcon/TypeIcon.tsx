import type { SvgIconComponent } from '@mui/icons-material';
import {
  MemoryIcon,
  BatterySaverIcon,
  BiotechIcon,
  DirectionsCarFilledIcon,
  LanguageIcon,
  BoltIcon,
  GppGoodIcon,
  AccountBalanceIcon,
} from 'features/shared';
import type { IssueType } from 'features/types/types';

interface TypeIconProps {
  type: IssueType;
}

const DEFAULT_ICON_SIZE = 28;

const TYPE_META = {
  semiconductor: {
    Icon: MemoryIcon,
    wrapperClass: 'bg-semiconductor-bg text-semiconductor-icon',
    iconSize: DEFAULT_ICON_SIZE,
  },
  battery: {
    Icon: BatterySaverIcon,
    wrapperClass: 'bg-battery-bg text-battery-icon',
    iconSize: DEFAULT_ICON_SIZE,
  },
  biotech: {
    Icon: BiotechIcon,
    wrapperClass: 'bg-biotech-bg text-biotech-icon',
    iconSize: DEFAULT_ICON_SIZE,
  },
  mobility: {
    Icon: DirectionsCarFilledIcon,
    wrapperClass: 'bg-mobility-bg text-mobility-icon',
    iconSize: DEFAULT_ICON_SIZE,
  },
  internet: {
    Icon: LanguageIcon,
    wrapperClass: 'bg-internet-bg text-internet-icon',
    iconSize: 26,
  },
  energy: {
    Icon: BoltIcon,
    wrapperClass: 'bg-energy-bg text-energy-icon',
    iconSize: 30,
  },
  defense: {
    Icon: GppGoodIcon,
    wrapperClass: 'bg-defense-bg text-defense-icon',
    iconSize: DEFAULT_ICON_SIZE,
  },
  finance: {
    Icon: AccountBalanceIcon,
    wrapperClass: 'bg-finance-bg text-finance-icon',
    iconSize: 22,
  },
} as const satisfies Record<
  IssueType,
  { Icon: SvgIconComponent; wrapperClass: string; iconSize: number }
>;

const TypeIcon = ({ type }: TypeIconProps) => {
  const { Icon, wrapperClass, iconSize } = TYPE_META[type];

  return (
    <div
      className={`inline-flex items-center justify-center rounded-xl p-3 w-12 h-12 ${wrapperClass}`}
    >
      <Icon sx={{ fontSize: iconSize, color: 'currentColor' }} />
    </div>
  );
};

export { TypeIcon };
