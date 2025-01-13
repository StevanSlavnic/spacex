import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import NoResults from "../index";

describe("NoResults Component", () => {
  it("should render without crashing", () => {
    const { container, getByText } = render(<NoResults />);
    expect(getByText("No Results Found")).toBeInTheDocument();
    expect(
      getByText(
        "Try adjusting your search or filter to find what you're looking for."
      )
    ).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
