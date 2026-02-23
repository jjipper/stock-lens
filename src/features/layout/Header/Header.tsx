import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex h-16 items-center border-b border-gray-200 bg-white px-6">
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
          className="text-base font-semibold px-4 py-2 rounded-md cursor-pointer transition-all hover:bg-gray-50"
        >
          Issues
        </Link>
        <Link
          to="/stock"
          className="text-base font-semibold px-4 py-2 rounded-md cursor-pointer transition-all hover:bg-gray-50"
        >
          {' '}
          Stocks
        </Link>
      </nav>
    </header>
  );
};

export { Header };
