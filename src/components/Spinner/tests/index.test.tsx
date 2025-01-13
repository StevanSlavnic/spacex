import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Spinner from "../index";

describe("Spinner Component", () => {
  it("should render without crashing", () => {
    const { container } = render(<Spinner />);
    expect(container).toMatchSnapshot();
  });
});
