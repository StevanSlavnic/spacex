import React from "react";
import { renderHook, act } from "@testing-library/react";
import { SearchProvider, useSearchContext } from "..";

describe("SearchContext", () => {
  it("provides search context values and functions", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <SearchProvider>{children}</SearchProvider>
    );

    const { result } = renderHook(() => useSearchContext(), { wrapper });

    // Initial values
    expect(result.current.yearValue).toBe("");
    expect(result.current.searchValue).toBe("");

    // Update year
    act(() => {
      result.current.setYearValue("2020");
    });
    expect(result.current.yearValue).toBe("2020");

    // Update search
    act(() => {
      result.current.setSearchValue("Falcon");
    });
    expect(result.current.searchValue).toBe("Falcon");
  });
});
