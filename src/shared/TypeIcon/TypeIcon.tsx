import { IconWrapper } from './ui/styled';
import {
MemoryIcon,
BatterySaverIcon,
AutoAwesomeIcon,
ShowChartIcon,
AttachMoneyIcon,
} from '../Icons/Icons';

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
}

const IconWrapper = styled.div<TypeIconProps>`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding: 8px;
	border-radius: 50%;
	background-color: var(--${props => props.type}-bg);

	* {
		color: var(--${props => props.type}-icon);
	}
`;

const TypeIcon = ({ type, fontSize = 24 }: TypeIconProps) => {
  const IconComponent = IconType[type];
  
  return (
    <IconWrapper type={type}>
      <IconComponent sx={{ fontSize }} />
    </IconWrapper>
  );
};

export default TypeIcon;