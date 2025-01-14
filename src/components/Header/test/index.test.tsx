import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../index";

describe("Header component", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <Router>
        <Header />
      </Router>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it("should render the header with correct links", () => {
    const { getByText } = render(
      <Router>
        <Header />
      </Router>
    );

    expect(getByText("SpaceX Launches")).toBeInTheDocument();
    expect(getByText("Launches")).toBeInTheDocument();
    expect(getByText("Favorite Launches")).toBeInTheDocument();
  });

  it("should have correct link paths", () => {
    const { getByText } = render(
      <Router>
        <Header />
      </Router>
    );

    expect(getByText("SpaceX Launches").closest("a")).toHaveAttribute(
      "href",
      "/"
    );
    expect(getByText("Launches").closest("a")).toHaveAttribute("href", "/");
    expect(getByText("Favorite Launches").closest("a")).toHaveAttribute(
      "href",
      "/favorite-launches"
    );
  });
});
