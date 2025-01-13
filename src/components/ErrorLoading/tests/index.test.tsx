import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ErrorLoading from "..";

describe("ErrorLoading", () => {
  it("renders the error message", () => {
    const { container, getByText } = render(<ErrorLoading />);
    expect(getByText("Something went wrong...")).toBeInTheDocument();
    expect(
      getByText("Try refreshing the page or check your internet connection.")
    ).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
