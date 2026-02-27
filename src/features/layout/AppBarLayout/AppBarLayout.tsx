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
		<>
			<Header />
			<nav className="sticky top-16 z-10 border-b border-gray-100 bg-white">
				<div className="mx-auto flex max-w-5xl items-center gap-2 px-4 py-2">
					{' '}
					<button
						onClick={handleBackButtonClick}
						className="h-10 w-10 cursor-pointer rounded-md hover:bg-gray-50"
					>
						<ArrowBackIcon sx={{ fontSize: 20 }} className="text-gray-600" />
					</button>
					<h1 className="text-lg font-bold">{title}</h1>
				</div>
			</nav>
			<div className="mx-auto flex max-w-5xl flex-col gap-5 px-6 pt-5 pb-16">
				<Outlet />
			</div>
		</>
	);
};
