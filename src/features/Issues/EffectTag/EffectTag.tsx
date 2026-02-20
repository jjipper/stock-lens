interface EffectTagProps {
  effect: 'high' | 'middle' | 'low';
}

const effectClassMap = {
  high: 'bg-effect-high-bg text-effect-high',
  middle: 'bg-effect-middle-bg text-effect-middle',
  low: 'bg-effect-low-bg text-effect-low',
};

const EffectTag = ({ effect }: EffectTagProps) => {
  return (
    <div
      className={`flex w-max items-center justify-center gap-1 rounded-full px-3 py-1 ${effectClassMap[effect]}`}
    >
      <span className="text-sm font-semibold text-inherit">Effect {effect}</span>
    </div>
  );
};

export { EffectTag };
