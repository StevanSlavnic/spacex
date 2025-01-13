import { Link } from "react-router-dom";

import LaunchCard from "../../components/LaunchCard";
import List from "../../components/List";

import { Launch } from "../../types";

export default function FavoriteLaunchesPage() {
  const launches = JSON.parse(localStorage.getItem("favoriteLaunches") || "[]");

  return (
    <section>
      <article className="mb-6">
        <p className="text-3xl font-bold">Favorite Launches</p>

        {!launches.length ? (
          <>
            <p className="text-xl">You haven't favorited any launches yet.</p>
            <Link to="/" className="text-blue-500">
              Go back to the home page to find launches to favorite.
            </Link>
          </>
        ) : (
          <p className="text-xl mt-4">
            Here you can find a list of all the SpaceX launches that you have
            favorited.
          </p>
        )}
      </article>

      <List
        role="feed"
        style="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6"
        data={launches}
        renderItem={(launch: Launch) => (
          <LaunchCard key={launch.id} launch={launch} />
        )}
      />
    </section>
  );
}
