import { render } from "@testing-library/react";
import { HistoricalWeatherInformation } from "../components";

test("displays correctly heading for humidity changes", async () => {
  const historicalWeatherData = {
    hourly: [
      {
        dt: 1634554800,
        temp: 299.72,
        feels_like: 299.72,
        pressure: 1018,
        humidity: 40,
        dew_point: 285.03,
        uvi: 5.97,
        clouds: 40,
        visibility: 10000,
        wind_speed: 5.14,
        wind_deg: 60,
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "scattered clouds",
            icon: "03d",
          },
        ],
      },
      {
        dt: 1634558400,
        temp: 300.72,
        feels_like: 300.13,
        pressure: 1017,
        humidity: 34,
        dew_point: 283.46,
        uvi: 5.97,
        clouds: 40,
        visibility: 10000,
        wind_speed: 6.69,
        wind_deg: 80,
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "scattered clouds",
            icon: "03d",
          },
        ],
      },
    ],
  };
  const RenderedHistoricalWeatherComponent = render(
    <HistoricalWeatherInformation
      name="Nairobi"
      historicalWeatherData={historicalWeatherData}
    />
  );

  const JsxElement = await RenderedHistoricalWeatherComponent.findByTestId(
    "humidity heading"
  );
  expect(JsxElement).toHaveTextContent(
    `Humidity for Nairobi for the last ${historicalWeatherData.hourly.length} hours`
  );
});
