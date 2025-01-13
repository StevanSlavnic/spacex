import Search from "../Search";
import List from "../../components/List";
import LaunchCard from "../../components/LaunchCard";
import NoResults from "../../components/NoResults";
import Spinner from "../../components/Spinner";
import LoadMore from "../../components/LoadMore";
import ErrorLoading from "../../components/ErrorLoading";

import { useDebouncedCallback } from "use-debounce";
import { getLaunches } from "../../features/launches/getLaunches";

import { Launch } from "../../types";

export default function LaunchesList() {
  const {
    launches,
    fetchNextPage,
    isError,
    hasNextPage,
    isFetched,
    isFetching,
    isLoading,
  } = getLaunches();

  const debounceLoadMoreArticles = useDebouncedCallback(fetchNextPage, 300);

  return (
    <section>
      <Search />

      <List
        role="feed"
        style="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6"
        data={launches}
        renderItem={(launch: Launch) => (
          <LaunchCard key={launch.id} launch={launch} />
        )}
      />

      {isFetched && !launches.length && <NoResults />}
      {isError && <ErrorLoading />}
      {(isLoading || isFetching) && <Spinner />}

      <LoadMore
        hasNextPage={hasNextPage}
        onLoadMore={debounceLoadMoreArticles}
      />
    </section>
  );
}
