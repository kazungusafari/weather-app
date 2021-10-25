import React from "react";

import { FormField } from "@formfield/react";
import { SearchInput } from "./SearchInput";
import { withFormHandlersAndState } from "../hoc";
import { FormProps } from "../types";

const FormW = ({
  handleSubmit,
  formData,
  formHasError,
  onChangeFieldValueHandler,
  setFormError,
}: FormProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <FormField name="city" required onFieldError={setFormError} type="alpha">
        {({ fieldErrors, isFieldTouched, onChangeFieldErrorHandler }) => (
          <SearchInput
            onChangeFieldErrorHandler={onChangeFieldErrorHandler}
            onChangeFieldValueHandler={onChangeFieldValueHandler}
            isFieldTouched={isFieldTouched}
            fieldErrors={fieldErrors}
            value={formData.city}
          />
        )}
      </FormField>
    </form>
  );
};

export const Form = withFormHandlersAndState(FormW);
