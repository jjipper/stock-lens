import { ArrowBackIcon } from 'features/shared';
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { Header } from '../Header/Header';

const AppBarLayout = () => {
	const [appBarTitle, setAppBarTitle] = useState('App Bar Title');

	const navigate = useNavigate();
	const handleBackButtonClick = () => {
		navigate(-1);
	};

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
					<h1 className="text-lg font-bold">{appBarTitle}</h1>
				</div>
			</nav>
			<div className="mx-auto flex max-w-5xl flex-col gap-5 px-6 pt-5 pb-16">
				<Outlet context={{ setAppBarTitle }} />
			</div>
		</>
	);
};

export { AppBarLayout };
