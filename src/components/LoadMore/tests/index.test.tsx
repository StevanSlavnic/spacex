import { render, waitFor } from "@testing-library/react";
import "react-intersection-observer/test-utils";
import "@testing-library/jest-dom";
import LoadMore from "..";

describe("LoadMore Component", () => {
  const intersectionObserverMock = () => ({
    observe: () => null,
  });
  window.IntersectionObserver = jest
    .fn()
    .mockImplementation(intersectionObserverMock);
  const debounceLoadMoreArticles = jest.fn();
  it("should render without crashing", () => {
    const { container } = render(
      <LoadMore hasNextPage={true} onLoadMore={debounceLoadMoreArticles} />
    );
    expect(container).toMatchSnapshot();
  });

  it("should call debounceLoadMoreArticles when in view and hasNextPage is true", () => {
    render(
      <LoadMore hasNextPage={true} onLoadMore={debounceLoadMoreArticles} />
    );

    waitFor(() => {
      expect(debounceLoadMoreArticles).toHaveBeenCalled();
    });
  });

  it("should not call debounceLoadMoreArticles when not in view", () => {
    const debounceLoadMoreArticles = jest.fn();
    render(
      <LoadMore hasNextPage={true} onLoadMore={debounceLoadMoreArticles} />
    );

    expect(debounceLoadMoreArticles).not.toHaveBeenCalled();
  });

  it("should not call debounceLoadMoreArticles when hasNextPage is false", () => {
    const debounceLoadMoreArticles = jest.fn();
    render(
      <LoadMore hasNextPage={false} onLoadMore={debounceLoadMoreArticles} />
    );

    expect(debounceLoadMoreArticles).not.toHaveBeenCalled();
  });
});
