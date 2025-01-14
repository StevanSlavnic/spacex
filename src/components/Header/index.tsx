import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="bg-gray-800 py-4 mb-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between sm:items-center">
        <Link to="/" className="text-white text-2xl font-bold mb-4 sm:mb-0">
          SpaceX Launches
        </Link>

        <div className="space-x-8">
          <Link to="/" className="text-white text-lg">
            Launches
          </Link>
          <Link to="/favorite-launches" className="text-white text-lg">
            Favorite Launches
          </Link>
        </div>
      </div>
    </nav>
  );
}
