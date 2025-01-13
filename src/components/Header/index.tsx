import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="bg-gray-800 py-4 mb-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          SpaceX Launches
        </Link>
        <Link to="/favorite-launches" className="text-white text-lg">
          Favorite Launches
        </Link>
      </div>
    </nav>
  );
}
