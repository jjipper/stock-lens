import { Outlet } from 'react-router-dom';

import { Header } from '../Header/Header';

export const MainLayout = () => {
	return (
		<>
			<Header />
			<div className="mx-auto flex max-w-5xl flex-col gap-5 px-6 pt-5 pb-16">
				<Outlet />
			</div>
		</>
	);
};
