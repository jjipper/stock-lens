import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex h-16 items-center border-b border-gray-300 bg-white px-6">
      <h1>
        <Link
          to="/"
          aria-label="Stock News Timeline, go to main page"
          className="cursor-pointer rounded-md border-none bg-transparent text-2xl font-bold"
        >
          Stock News Timeline
        </Link>
      </h1>
    </header>
  );
};

export { Header };
