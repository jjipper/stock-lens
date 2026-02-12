import { Tag } from './ui/styled';

interface EffectTagProps {
  effect: 'high' | 'middle' | 'low';
}

const EffectTag = ({ effect }: EffectTagProps) => {
  return (
    <Tag className={effect}>
      <span className="tag-text">Effect {effect}</span>
    </Tag>
  );
};

export default EffectTag;
