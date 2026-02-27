interface EffectTagProps {
	effect: 'high' | 'middle' | 'low';
}

const effectClassMap = {
	high: 'bg-effect-high-bg text-effect-high',
	middle: 'bg-effect-middle-bg text-effect-middle',
	low: 'bg-effect-low-bg text-effect-low',
};

export const EffectTag = ({ effect }: EffectTagProps) => {
	return (
		<div
			className={`flex w-max items-center justify-center gap-1 rounded-full px-3 py-1 ${effectClassMap[effect]}`}
		>
			<span className="text-xs font-semibold text-inherit">
				Effect {effect}
			</span>
		</div>
	);
};
