import React from "react";

import { FormField, FormRules } from "@formfield/react";
import { SearchInput } from "./SearchInput";
import { withFormHandlersAndState } from "../hoc";
import { FormProps } from "../types";

const FormW = ({
  handleSubmit,
  formData,
  formHasError,
  fieldValueHandler,
  setFormError,
}: FormProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <FormField
        name="city"
        rules={[
          FormRules.required("City is required"),
          FormRules.alpha("Only alphabets are allowed"),
        ]}
        onFieldError={setFormError}
      >
        {({ fieldErrors, isFieldTouched, fieldErrorHandler }) => (
          <SearchInput
            fieldErrorHandler={fieldErrorHandler}
            fieldValueHandler={fieldValueHandler}
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
