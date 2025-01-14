import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import List from "../index";
import { Launch } from "../../../types";
import { launchesMock } from "../../../mocks/launches.mock";

describe("List component", () => {
  const renderItem = (item: Launch) => (
    <div data-testid="item" key={item.id}>
      {item.name}
    </div>
  );

  it("renders without crashing", () => {
    const { container } = render(
      <List data={launchesMock} renderItem={renderItem} />
    );
    expect(container).toBeInTheDocument();
  });

  it("renders the correct number of items", () => {
    const { container } = render(
      <List data={launchesMock} renderItem={renderItem} />
    );
    const items = container.querySelectorAll("[data-testid='item']");
    expect(items.length).toBe(launchesMock.length);
  });

  it("renders the correct content", () => {
    const { getByText } = render(
      <List data={launchesMock} renderItem={renderItem} />
    );
    launchesMock.forEach((item) => {
      expect(getByText(item.name)).toBeInTheDocument();
    });
  });
});
