import { getFieldIfEvent } from "@kazungusafari/react-form-field";
import { SearchInputProps } from "../types";

export const SearchInput = ({
  onChangeFieldValueHandler,
  onChangeFieldErrorHandler,
  isFieldTouched,
  value,
  fieldErrors,
}: SearchInputProps) => {
  return (
    <>
      <input
        id="city"
        name="city"
        onChange={(e) => {
          const field = getFieldIfEvent(e);
          onChangeFieldValueHandler(field);
          onChangeFieldErrorHandler(field);
        }}
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
