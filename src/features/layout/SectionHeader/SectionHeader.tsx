export const SectionHeader = ({
	title,
	updateTime,
}: {
	title: string;
	updateTime?: string;
}) => {
	return (
		<div className="flex w-full flex-wrap items-center justify-between gap-2">
			<h4 className="text-[1.35rem] leading-tight font-semibold tracking-tight text-slate-900">
				{title}
			</h4>
			{updateTime && (
				<p className="rounded-full border border-slate-200/90 bg-slate-50/80 px-3 py-1 text-xs font-medium text-slate-500">
					Updated {updateTime}
				</p>
			)}
		</div>
	);
};
