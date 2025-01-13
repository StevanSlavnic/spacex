import { InView } from "react-intersection-observer";

export default function LoadMore({
  hasNextPage,
  onLoadMore,
}: {
  hasNextPage: boolean;
  onLoadMore: () => void;
}) {
  return (
    <>
      <InView
        as={"div"}
        onChange={(inView) => {
          if (hasNextPage && inView) {
            onLoadMore();
          }
        }}
      >
        <div className="flex justify-center items-center"></div>
      </InView>
    </>
  );
}
