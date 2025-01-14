import { ReactNode } from "react";

export interface SearchContextType {
    yearValue: string;
    setYearValue: (value: string) => void;
    searchValue: string;
    setSearchValue: (value: string) => void;
}

export interface SearchProviderProps {
    children: ReactNode;
}