import React from "react";
import { getWeatherInfoByCityAsyncThunk } from "../features";
import { useAppDispatch } from "../hooks/reacthooks";

import { FormField, FormRules, Form } from "@formfield/react";
import { SearchInput } from "./SearchInput";

export const SearchForm = () => {
  const dispatch = useAppDispatch();
  const onSubmit = (data: { city: string }) => {
    dispatch(getWeatherInfoByCityAsyncThunk(data.city));
  };
  return (
    <Form onSubmit={onSubmit} initialValues={{ city: "" }}>
      <FormField
        name="city"
        rules={[
          FormRules.required("City is required"),
          FormRules.alpha("Only alphabets are allowed"),
        ]}
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
    </Form>
  );
};
