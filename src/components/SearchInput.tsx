import React from "react";
import { SearchInputProps } from "../types";

export const SearchInput = ({
  fieldHandler,
  fieldErrors,
  fieldHasErrors,
  fieldValue,
  fieldName,
}: SearchInputProps) => {
  return (
    <>
      <input
        id={fieldName}
        name={fieldName}
        onChange={fieldHandler}
        value={fieldValue}
        placeholder="Enter city"
        data-testid="search-input"
      />
      <button data-testid="search-button">Search</button>
      <div className="input-error">
        {fieldHasErrors && <p className="error">{fieldErrors}</p>}
      </div>
    </>
  );
};
