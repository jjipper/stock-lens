import { ArrowBackIcon } from 'features/shared';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { Header } from '../Header/Header';

const titleMap: Record<string, string> = {
	'/issue': 'Issue List',
	'/stock': 'Stock List',
} as const;

export const AppBarLayout = () => {
	const navigate = useNavigate();
	const handleBackButtonClick = () => {
		navigate(-1);
	};

	const location = useLocation();
	const pathname = location.pathname;

	const getTitle = (pathname: string) => {
		if (titleMap[pathname]) return titleMap[pathname];
		if (pathname.startsWith('/issue/')) return 'Issue Detail';
		if (pathname.startsWith('/stock/')) return 'Stock Detail';
		return 'Page';
	};

	const title = getTitle(pathname);

	return (
		<div className="app-shell">
			<Header />
			<nav className="sticky top-[4.5rem] z-30 border-b border-white/60 bg-white/56 backdrop-blur-xl">
				<div className="mx-auto flex w-full max-w-[1120px] items-center gap-2 px-4 py-2.5 sm:px-6 lg:px-8">
					<button
						type="button"
						onClick={handleBackButtonClick}
						className="shadow-soft flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-slate-200/80 bg-white/95 text-slate-700 transition-all hover:-translate-y-0.5 hover:bg-slate-50"
					>
						<ArrowBackIcon sx={{ fontSize: 20 }} className="text-current" />
					</button>
					<h1 className="text-lg font-semibold tracking-tight text-slate-900">
						{title}
					</h1>
				</div>
			</nav>
			<div className="content-shell flex flex-col gap-6 sm:gap-7">
				<Outlet />
			</div>
		</div>
	);
};
