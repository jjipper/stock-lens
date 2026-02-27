import { Link } from 'react-router-dom';

export const Header = () => {
	return (
		<header className="sticky top-0 z-10 h-16 w-full border-b border-gray-200 bg-white">
			<div className="mx-auto flex h-16 max-w-5xl items-center px-6">
				<Link
					to="/"
					aria-label="Stock News Timeline, go to main page"
					className="cursor-pointer rounded-md border-none bg-transparent text-2xl font-bold"
				>
					Stock News Timeline
				</Link>
				<nav className="ml-auto flex gap-1">
					<Link
						to="/issue"
						className="cursor-pointer rounded-md px-4 py-2 text-base font-semibold transition-all hover:bg-gray-50"
					>
						Issues
					</Link>
					<Link
						to="/stock"
						className="cursor-pointer rounded-md px-4 py-2 text-base font-semibold transition-all hover:bg-gray-50"
					>
						{' '}
						Stocks
					</Link>
				</nav>
			</div>
		</header>
	);
};
