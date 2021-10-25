import React from "react";
import { getFieldIfEvent } from "@formfield/react";
import { SearchInputProps } from "../types";

export const SearchInput = ({
  onChangeFieldValueHandler,
  onChangeFieldErrorHandler,
  isFieldTouched,
  value,
  fieldErrors,
}: SearchInputProps) => {
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const field = getFieldIfEvent(e);
    onChangeFieldValueHandler(field);
    onChangeFieldErrorHandler(field);
  };

  return (
    <>
      <input
        id="city"
        name="city"
        onChange={inputHandler}
        value={value}
        placeholder="Enter city"
      />
      <button>Search</button>
      <div className="input-error">
        {isFieldTouched && fieldErrors.type === "required" && (
          <p className="error">City is required</p>
        )}
        {isFieldTouched && fieldErrors.type === "alpha" && (
          <p className="error">Only alphabets are allowed.</p>
        )}
      </div>
    </>
  );
};
