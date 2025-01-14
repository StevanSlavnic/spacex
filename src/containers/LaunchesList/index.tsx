import Search from "../Search";
import List from "../../components/List";
import LaunchCard from "../../components/LaunchCard";
import Message from "../../components/Message";
import Spinner from "../../components/Spinner";
import LoadMore from "../../components/LoadMore";

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

      {isFetched && !launches.length && !isError && (
        <Message
          title="No Results Found"
          message="Try adjusting your search or filter to find what you're looking for."
        />
      )}
      {isError && (
        <Message
          title="Something went wrong..."
          message="Try refreshing the page or check your internet connection."
        />
      )}
      {(isLoading || isFetching) && !isError && <Spinner />}

      <LoadMore
        hasNextPage={hasNextPage}
        onLoadMore={debounceLoadMoreArticles}
      />
    </section>
  );
}
