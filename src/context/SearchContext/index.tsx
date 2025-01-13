import { createContext, useContext, useState } from "react";
import { SearchContextType, SearchProviderProps } from "./types";

const SearchContext = createContext<SearchContextType | null>(null);

export const SearchProvider = ({ children }: SearchProviderProps) => {
  const [yearValue, setYearValue] = useState<string>("");
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <SearchContext.Provider
      value={{
        yearValue,
        setYearValue,
        searchValue,
        setSearchValue,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = (): SearchContextType => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }
  return context;
};
