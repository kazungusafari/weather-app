import * as Helpers from "../helpers";

export const getWeatherData = (payload: any) => {
  return {
    name: payload.name,
    description: payload.weather[0].description,
    temperature: Helpers.kToC(payload.main.temp),
    humidity: payload.main.humidity,
    pressure: payload.main.pressure,
    dateTime: Helpers.getDateTimeFromEpochTime(payload.dt),
    windSpeed: payload.wind.speed,
  };
};
