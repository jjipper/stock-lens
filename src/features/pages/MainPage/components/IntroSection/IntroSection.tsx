import { MovingIcon } from 'features/shared';

export const IntroSection = () => {
	return (
		<section className="motion-fade-up via-primary-dark to-accent-cyan shadow-float relative isolate overflow-hidden rounded-[2rem] border border-white/35 bg-linear-to-br from-slate-950 px-6 py-8 text-white sm:px-8 sm:py-10">
			<div className="absolute -top-10 right-0 h-44 w-44 rounded-full bg-white/20 blur-3xl" />
			<div className="bg-accent-cyan/45 absolute -bottom-16 -left-8 h-44 w-44 rounded-full blur-3xl" />

			<div className="relative flex items-center gap-2">
				<MovingIcon className="text-white/90" sx={{ fontSize: 20 }} />
				<span className="text-xs font-medium tracking-[0.18em] text-white/90 uppercase">
					Today&apos;s Market Pulse
				</span>
			</div>

			<h2 className="relative mt-2 max-w-xl text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
				Signal-first stock briefing for your next move
			</h2>

			<p className="relative mt-2 max-w-lg text-sm font-normal text-white/78 sm:text-base">
				Understand market momentum through issues, mentions, and stock reactions
				in one visual flow.
			</p>

			<div className="relative mt-5 flex flex-wrap items-center gap-2">
				<span className="rounded-full border border-white/25 bg-white/15 px-3 py-1 text-xs font-medium">
					Realtime Signals
				</span>
				<span className="rounded-full border border-white/25 bg-white/15 px-3 py-1 text-xs font-medium">
					Issue Driven
				</span>
				<span className="rounded-full border border-white/25 bg-white/15 px-3 py-1 text-xs font-medium">
					Actionable Snapshot
				</span>
			</div>
		</section>
	);
};
