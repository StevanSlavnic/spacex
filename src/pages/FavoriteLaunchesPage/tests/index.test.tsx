import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FavoriteLaunches from "..";
import "@testing-library/jest-dom";
import { launchesMock } from "../../../mocks/launches.mock";

// Mock the LaunchCard and List components
jest.mock(
  "../../../components/LaunchCard",
  () =>
    ({ launch }: { launch: any }) => (
      <div data-testid="launch-card">{launch.name}</div>
    )
);
jest.mock(
  "../../../components/List",
  () =>
    ({
      renderItem,
      data,
    }: {
      renderItem: (item: any) => JSX.Element;
      data: any[];
    }) => <div role="feed">{data.map((item) => renderItem(item))}</div>
);

describe("FavoriteLaunches", () => {
  const mockLaunches = [
    { id: 1, name: "Falcon 1" },
    { id: 2, name: "Falcon 9" },
  ];

  beforeEach(() => {
    localStorage.clear();
  });

  it("renders the empty state when no launches are favorited", () => {
    localStorage.setItem("favoriteLaunches", JSON.stringify([]));

    render(
      <BrowserRouter>
        <FavoriteLaunches />
      </BrowserRouter>
    );

    expect(screen.getByText("Favorite Launches")).toBeInTheDocument();
    expect(
      screen.getByText("You haven't favorited any launches yet.")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Go back to the home page to find launches to favorite.")
    ).toBeInTheDocument();
  });

  it("renders a list of favorite launches when they exist", () => {
    localStorage.setItem(
      "favoriteLaunches",
      JSON.stringify(launchesMock.slice(0, 2))
    );

    render(
      <BrowserRouter>
        <FavoriteLaunches />
      </BrowserRouter>
    );

    expect(screen.getByText("Favorite Launches")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Here you can find a list of all the SpaceX launches that you have favorited."
      )
    ).toBeInTheDocument();
    expect(screen.getAllByTestId("launch-card")).toHaveLength(2);
    expect(screen.getByText("Falcon 1")).toBeInTheDocument();
    expect(screen.getByText("Falcon 9")).toBeInTheDocument();
  });
});
