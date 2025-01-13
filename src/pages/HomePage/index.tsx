import LaunchesList from "../../containers/LaunchesList";

export default function HomePage() {
  return (
    <section>
      <header className="mb-6">
        <p className="text-3xl font-bold">
          Welcome to the SpaceX Launches app!
        </p>
        <p className="text-xl mt-4">
          Here you can find a list of all the SpaceX launches that have happened
          since 2006.
        </p>
        <p className="text-xl mt-4">
          You can also search for a specific launch by entering the name of the
          launch in the search box below or selecting a year.
        </p>
      </header>

      <LaunchesList />
    </section>
  );
}
