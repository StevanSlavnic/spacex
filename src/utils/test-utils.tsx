import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { SearchProvider } from "../context/SearchContext";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <SearchProvider>{children}</SearchProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
