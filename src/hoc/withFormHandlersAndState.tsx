/* eslint-disable react-hooks/rules-of-hooks */
import { BasicField, useForm } from "@kazungusafari/react-form-field";
import { FormFieldError } from "@kazungusafari/react-form-field/dist/Types";
import { getWeatherInfoByCityAsyncThunk } from "../features";
import { useAppDispatch } from "../hooks/reacthooks";
import { FormProps } from "../types";

export function withFormHandlersAndState<T>(Component: React.ComponentType<T>) {
  return (props: Omit<T, keyof FormProps>) => {
    const dispatch = useAppDispatch();

    const {
      formData,
      formErrors,
      formHasError,
      onChangeFieldValueHandler,
      setFormError,
    } = useForm({ city: "" });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (formHasError === false) {
        dispatch(getWeatherInfoByCityAsyncThunk(formData.city));
      } else {
        console.log(formErrors);
      }
    };
    return (
      <Component
        {...(props as T)}
        formData={formData}
        onChangeFieldValueHandler={onChangeFieldValueHandler}
        setFormError={setFormError}
        handleSubmit={handleSubmit}
      />
    );
  };
}