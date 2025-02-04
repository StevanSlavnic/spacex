import { fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { launchesMock } from "../../../mocks/launches.mock";
import LaunchCard from "..";

describe("LaunchCard", () => {
  const onClick = jest.fn();
  it("renders without crashing", () => {
    const { getByText, getByRole, getByAltText } = render(
      <LaunchCard launch={launchesMock[0]} />
    );
    expect(getByAltText(launchesMock[0].name)).toHaveAttribute(
      "src",
      launchesMock[0].links.patch.small
    );
    expect(getByText(launchesMock[0].name)).toBeInTheDocument();
    expect(getByText("Launch date: 24-03-2006")).toBeInTheDocument();
    expect(getByText("Failure")).toBeInTheDocument();
    expect(getByRole("button")).toBeInTheDocument();
    expect(getByRole("button")).toHaveAttribute(
      "aria-label",
      "Favourtite launch"
    );
  });

  it("calls onClick prop when button is clicked", () => {
    const { getByRole } = render(<LaunchCard launch={launchesMock[0]} />);
    const button = getByRole("button");
    fireEvent.click(button);

    waitFor(() => {
      expect(onClick).toHaveBeenCalled();
    });
  });
});
