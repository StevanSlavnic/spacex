import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../index";

describe("Footer component", () => {
  it("renders without crashing", () => {
    const { container, getByText } = render(<Footer />);
    expect(getByText(/© 2024 SpaceX Launches/i)).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("has correct class names", () => {
    const { container } = render(<Footer />);
    expect(container.firstChild).toHaveClass("bg-gray-800 p-4");
  });

  it("contains a paragraph with the correct text", () => {
    const { getByText } = render(<Footer />);
    const paragraph = getByText(/© 2024 SpaceX Launches/i);
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveClass("text-white text-lg");
  });
});
