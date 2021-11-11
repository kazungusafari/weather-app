/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";

import { useForm } from "@formfield/react";
import { getWeatherInfoByCityAsyncThunk } from "../features";
import { useAppDispatch } from "../hooks/reacthooks";
import { FormProps } from "../types";

export function withFormHandlersAndState<T>(Component: React.ComponentType<T>) {
  return (props: Omit<T, keyof FormProps>) => {
    const dispatch = useAppDispatch();

    const { formData, formHandlers, handleSubmit } = useForm({ city: "" });

    const onSubmit = (data: { city: string }) => {
      dispatch(getWeatherInfoByCityAsyncThunk(data.city));
    };
    return (
      <Component
        {...(props as T)}
        formData={formData}
        formHandlers={formHandlers}
        handleSubmit={handleSubmit(onSubmit)}
      />
    );
  };
}
