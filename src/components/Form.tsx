import React from "react";

import { FormField, FormRules } from "@formfield/react";
import { SearchInput } from "./SearchInput";
import { withFormHandlersAndState } from "../hoc";
import { FormProps } from "../types";

const FormW = ({ handleSubmit, formData, formHandlers }: FormProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <FormField
        name="city"
        initialValue={formData.city}
        rules={[
          FormRules.required("City is required"),
          FormRules.alpha("Only alphabets are allowed"),
        ]}
        onFieldChanges={formHandlers}
      >
        {({
          fieldErrors,
          fieldHasErrors,
          fieldName,
          fieldValue,
          fieldHandler,
        }) => (
          <SearchInput
            fieldHandler={fieldHandler}
            fieldErrors={fieldErrors}
            fieldHasErrors={fieldHasErrors}
            fieldName={fieldName}
            fieldValue={fieldValue}
          />
        )}
      </FormField>
    </form>
  );
};

export const Form = withFormHandlersAndState(FormW);
