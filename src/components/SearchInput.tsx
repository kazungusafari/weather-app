import React from "react";
import { getFieldIfEvent } from "@formfield/react";
import { SearchInputProps } from "../types";

export const SearchInput = ({
  fieldValueHandler,
  fieldErrorHandler,
  isFieldTouched,
  value,
  fieldErrors,
}: SearchInputProps) => {
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const field = getFieldIfEvent(e);
    fieldValueHandler(field);
    fieldErrorHandler(field);
  };

  return (
    <>
      <input
        id="city"
        name="city"
        onChange={inputHandler}
        value={value}
        placeholder="Enter city"
        data-testid="search-input"
      />
      <button data-testid="search-button">Search</button>
      <div className="input-error">
        {isFieldTouched && fieldErrors && (
          <p className="error">{fieldErrors}</p>
        )}
      </div>
    </>
  );
};
