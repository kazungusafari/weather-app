import { render } from "@testing-library/react";
import { WeatherInformation } from "../components";

test("displays name of the city correctly", async () => {
  const weatherData = {
    name: "Nairobi",
    description: "Rainy",
    temperature: 260,
    humidity: 1000,
    pressure: 1000,
    windSpeed: 45,
    dateTime: 163700059,
  };
  const RenderWeatherComponent = render(
    <WeatherInformation weatherInformation={weatherData} />
  );

  const JsxElement = await RenderWeatherComponent.findByTestId("name");
  expect(JsxElement).toHaveTextContent(weatherData.name);
});
