import { useRef } from "react";
import { useDebouncedCallback } from "use-debounce";

import { useSearchContext } from "../../context/SearchContext";

import CrossIcon from "../../components/Icons/CrossIcon";
import Button from "../../components/Button";
import SelectOption from "../../components/SelectOption";

import { SPACEX_LAUNCH_YEARS } from "../../constants";

export default function Search() {
  const { yearValue, setYearValue, searchValue, setSearchValue } =
    useSearchContext();

  const searchInputRef = useRef<HTMLInputElement>(null);

  const debounced = useDebouncedCallback((value) => {
    setSearchValue(value);
  }, 400);

  return (
    <section className="flex flex-col md:flex-row items-center p-4 bg-white rounded shadow from-neutral-300 mb-6">
      <div className="w-full md:w-1/3 mb-2 md:mb-0 md:mr-2">
        <SelectOption
          id="launch-year"
          label="Select Launch Year"
          options={SPACEX_LAUNCH_YEARS}
          value={yearValue}
          onChange={(value: string) => setYearValue(value)}
          placeholder="Select all"
        />
      </div>
      <div className="w-full md:w-2/3 mb-2 md:mb-0 md:mr-2">
        <label htmlFor="search">Search by launch name</label>
        <div className="relative">
          <input
            ref={searchInputRef}
            id="search"
            role="searchbox"
            defaultValue={searchValue}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter launch name"
            onChange={(e) => {
              debounced(e.target.value);
            }}
          />
          {searchValue && (
            <Button
              type="button"
              role="button"
              aria-label="Clear search"
              className="absolute right-0 top-0 bottom-0 p-2"
              onClick={() => {
                setSearchValue("");
                if (searchInputRef.current) {
                  searchInputRef.current.value = "";
                }
              }}
            >
              <CrossIcon />
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
