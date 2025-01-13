import { render, screen } from "../../../utils/test-utils";
import "@testing-library/jest-dom";
import "react-intersection-observer/test-utils";
import LaunchesList from "..";
import { getLaunches } from "../../../features/launches/getLaunches";

import { launchesMock } from "../../../mocks/launches.mock";
import { SPACEX_LAUNCH_YEARS } from "../../../constants";

jest.mock("../../../features/launches/getLaunches");

describe("LaunchesList", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the Search component", () => {
    (getLaunches as jest.Mock).mockReturnValue({
      launches: [],
      fetchNextPage: jest.fn(),
      isLoading: false,
      hasNextPage: false,
      isFetched: false,
      isFetching: false,
    });

    const { getByRole } = render(<LaunchesList />);
    const search = getByRole("searchbox");
    const listBox = getByRole("listbox");

    expect(search).toBeInTheDocument();
    expect(search).toHaveValue("");
    expect(getByRole("searchbox")).toBeInTheDocument();

    expect(listBox).toBeInTheDocument();
    expect(listBox.childNodes).toHaveLength(SPACEX_LAUNCH_YEARS.length + 1);
  });

  it("renders the List component with launches", () => {
    (getLaunches as jest.Mock).mockReturnValue({
      launches: launchesMock,
      fetchNextPage: jest.fn(),
      isLoading: false,
      hasNextPage: false,
      isFetched: true,
      isFetching: false,
    });

    const { getByRole } = render(<LaunchesList />);
    const feed = getByRole("feed");

    expect(feed).toBeInTheDocument();
    expect(feed.childNodes).toHaveLength(launchesMock.length);
  });

  it("renders Spinner component when loading or fetching", () => {
    (getLaunches as jest.Mock).mockReturnValue({
      launches: [],
      fetchNextPage: jest.fn(),
      isLoading: true,
      hasNextPage: false,
      isFetched: false,
      isFetching: false,
    });

    const { getByTestId } = render(<LaunchesList />);
    expect(getByTestId("spinner")).toBeInTheDocument();
  });

  it("renders without Spinner component when no results and has no next page", () => {
    (getLaunches as jest.Mock).mockReturnValue({
      launches: [],
      fetchNextPage: jest.fn(),
      isLoading: false,
      hasNextPage: false,
      isFetched: false,
      isFetching: false,
    });

    const { queryByTestId } = render(<LaunchesList />);
    expect(queryByTestId("spinner")).not.toBeInTheDocument();
  });

  it("renders NoResults component when no launches are found", () => {
    (getLaunches as jest.Mock).mockReturnValue({
      launches: [],
      fetchNextPage: jest.fn(),
      isLoading: false,
      hasNextPage: false,
      isFetched: true,
      isFetching: false,
    });

    const { getByText } = render(<LaunchesList />);
    expect(getByText("No Results Found")).toBeInTheDocument();
  });
});
