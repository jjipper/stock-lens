import { Tag } from './EffectTag.styles';

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

export { EffectTag };
