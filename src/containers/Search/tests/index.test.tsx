import "@testing-library/jest-dom";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { useSearchContext } from "../../../context/SearchContext";
import Search from "..";

jest.mock("../../../context/SearchContext", () => ({
  useSearchContext: jest.fn(),
}));

const mockSetYear = jest.fn();
const mockSetSearch = jest.fn();

beforeEach(() => {
  (useSearchContext as jest.Mock).mockReturnValue({
    yearValue: "",
    searchValue: "",
    setYearValue: mockSetYear,
    setSearchValue: mockSetSearch,
  });
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("Search", () => {
  it("renders Search component", () => {
    const { getByLabelText } = render(<Search />);
    expect(getByLabelText(/select launch year/i)).toBeInTheDocument();
    expect(getByLabelText(/search by launch name/i)).toBeInTheDocument();
  });
  it("calls setYear when a year is selected", () => {
    const { getByLabelText, getByRole } = render(<Search />);
    const select = getByLabelText(/select launch year/i);
    fireEvent.change(select, { target: { value: "2020" } });

    expect(mockSetYear).toHaveBeenCalledWith("2020");
    expect(useSearchContext as jest.Mock).toHaveBeenCalledTimes(1);
    waitFor(() => {
      expect(getByRole("listbox")).toHaveValue("2020");
    });
  });

  it("calls setSearch when search input changes", () => {
    const { getByRole } = render(<Search />);
    const input = getByRole("searchbox");
    fireEvent.change(input, { target: { value: "Falcon" } });

    expect(mockSetSearch).toHaveBeenCalledWith("Falcon");
    expect(useSearchContext as jest.Mock).toHaveBeenCalledTimes(1);
    waitFor(() => {
      expect(getByRole("searchbox")).toHaveValue("Falcon");
    });
  });

  it("clears search input when clear button is clicked", async () => {
    const { rerender, getByRole } = render(<Search />);

    waitFor(() => {
      fireEvent.change(getByRole("searchbox"), {
        target: { value: "Falcon" },
      });
    });

    expect(mockSetSearch).toHaveBeenCalledWith("Falcon");

    waitFor(() => {
      const clearButton = getByRole("button");
      fireEvent.click(clearButton);

      expect(mockSetSearch).toHaveBeenCalledWith("");
      expect(useSearchContext as jest.Mock).toHaveBeenCalledTimes(1);
    });

    rerender(<Search />);
    expect(getByRole("searchbox")).toHaveValue("");
  });
});
