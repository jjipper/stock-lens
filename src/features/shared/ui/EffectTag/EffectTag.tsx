interface EffectTagProps {
	effect: 'high' | 'middle' | 'low';
}

const effectClassMap = {
	high: 'border border-red-200/80 bg-effect-high-bg text-effect-high',
	middle: 'border border-amber-200/80 bg-effect-middle-bg text-effect-middle',
	low: 'border border-emerald-200/80 bg-effect-low-bg text-effect-low',
};

export const EffectTag = ({ effect }: EffectTagProps) => {
	return (
		<div
			className={`inline-flex w-max items-center justify-center gap-1 rounded-full px-3 py-1.5 text-xs font-semibold tracking-wide ${effectClassMap[effect]}`}
		>
			<span className="text-inherit">Effect {effect}</span>
		</div>
	);
};
