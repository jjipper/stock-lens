import { Link, NavLink } from 'react-router-dom';

const navigationItems = [
	{ label: 'Issues', to: '/issue' },
	{ label: 'Stocks', to: '/stock' },
] as const;

export const Header = () => {
	return (
		<header className="sticky top-0 z-40 h-[4.5rem] w-full border-b border-white/70 bg-white/75 backdrop-blur-xl">
			<div className="mx-auto flex h-full w-full max-w-[1120px] items-center px-4 sm:px-6 lg:px-8">
				<Link
					to="/"
					aria-label="Stock News Timeline, go to main page"
					className="rounded-lg border-none bg-transparent text-xl font-semibold tracking-tight text-slate-900 transition-opacity hover:opacity-85 sm:text-2xl"
				>
					<span className="to-primary bg-linear-to-r from-slate-900 via-slate-700 bg-clip-text text-transparent">
						Stock Lens
					</span>
				</Link>

				<nav className="shadow-soft ml-auto flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/85 p-1">
					{navigationItems.map((item) => (
						<NavLink
							key={item.to}
							to={item.to}
							className={({ isActive }) =>
								`group relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
									isActive
										? 'from-primary to-primary-dark bg-linear-to-r text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.38),0_12px_24px_-12px_rgba(0,55,165,0.85)]'
										: 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
								}`
							}
						>
							{({ isActive }) => (
								<>
									<span
										aria-hidden
										className={`h-1.5 w-1.5 rounded-full transition-all ${
											isActive
												? 'bg-white shadow-[0_0_0_4px_rgba(255,255,255,0.22)]'
												: 'bg-slate-300 group-hover:bg-slate-400'
										}`}
									/>
									<span>{item.label}</span>
								</>
							)}
						</NavLink>
					))}
				</nav>
			</div>
		</header>
	);
};
