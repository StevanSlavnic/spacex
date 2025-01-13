import React, { FC } from "react";

type Option<T> = number | string;

type SelectProps<T> = {
  id: string;
  label: string;
  options: Option<T>[];
  value: T;
  onChange: (value: T) => void;
  placeholder?: string;
};

const SelectOption = <T extends string | number>({
  id,
  label,
  options,
  value,
  onChange,
  placeholder = "Select all",
}: SelectProps<T>) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        role="listbox"
        value={value}
        onChange={(e) => onChange(e.target.value as T)}
        className="w-full p-2 border border-gray-300 rounded-md"
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectOption;
