import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Message from "../index";

describe("Message Component", () => {
  it("should render without crashing", () => {
    const { container, getByText } = render(
      <Message
        title="No Results Found"
        message="Try adjusting your search or filter to find what you're looking for."
      />
    );
    expect(getByText("No Results Found")).toBeInTheDocument();
    expect(
      getByText(
        "Try adjusting your search or filter to find what you're looking for."
      )
    ).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
