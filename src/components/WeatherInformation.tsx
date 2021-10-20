import { WeatherInformationProps } from "../types";

export const WeatherInformation = ({
  weatherInformation,
}: WeatherInformationProps) => {
  const {
    name,
    description,
    temperature,
    humidity,
    pressure,
    windSpeed,
    dateTime,
  } = weatherInformation;

  return (
    <>
      <h1 data-testid="name">{name}</h1>
      <p>{description}</p>
      <p>Temperature : {temperature} &#8451;</p>
      <p>Wind speed : {windSpeed} km/h</p>
      <p>Humidity : {humidity} %</p>
      <p>Pressure : {pressure}</p>
      <p>{dateTime}</p>
    </>
  );
};
