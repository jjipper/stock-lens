import { Outlet } from 'react-router-dom';

import { Header } from '../Header/Header';

export const MainLayout = () => {
	return (
		<div className="app-shell">
			<Header />
			<div className="content-shell flex flex-col gap-6 sm:gap-7">
				<Outlet />
			</div>
		</div>
	);
};
