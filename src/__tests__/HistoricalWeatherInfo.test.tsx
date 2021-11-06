import React from "react";
import { render } from "@testing-library/react";
import { HistoricalWeatherInformationW } from "../components";

test("displays correctly heading for humidity changes", async () => {
  const historicalWeatherData = [
    {
      dt: 1634554800,
      temp: 299.72,
      pressure: 1018,
      humidity: 40,
    },
    {
      dt: 1634558400,
      temp: 300.72,
      pressure: 1017,
      humidity: 34,
    },
  ];

  const RenderedHistoricalWeatherComponent = render(
    <HistoricalWeatherInformationW
      historicalWeatherData={historicalWeatherData}
    />
  );

  const JsxElement = await RenderedHistoricalWeatherComponent.findByTestId(
    "humidity heading"
  );
  expect(JsxElement).toHaveTextContent(
    `Humidity for the last ${historicalWeatherData.length} hours`
  );
});
