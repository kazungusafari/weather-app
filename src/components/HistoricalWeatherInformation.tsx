import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import * as Helpers from "../helpers";

export const HistoricalWeatherInformation = ({
  name,
  historicalWeatherData,
}: {
  name: string;
  historicalWeatherData: any;
}) => {
  console.log(historicalWeatherData.hourly);
  return (
    <>
      <h1>Historical weather information for {name}</h1>
      <p>
        Temperatures for {name} for the last{" "}
        {historicalWeatherData.hourly.length} hours
      </p>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart
          width={500}
          height={200}
          data={Helpers.getNewArray(historicalWeatherData.hourly)}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="dt" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="temp"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
      <p data-testid="humidity heading">
        Humidity for {name} for the last {historicalWeatherData.hourly.length}{" "}
        hours
      </p>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart
          width={500}
          height={200}
          data={Helpers.getNewArray(historicalWeatherData.hourly)}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="dt" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="humidity"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
        </AreaChart>
      </ResponsiveContainer>
      <p>
        Pressure for {name} for the last {historicalWeatherData.hourly.length}{" "}
        hours
      </p>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart
          width={500}
          height={200}
          data={Helpers.getNewArray(historicalWeatherData.hourly)}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="dt" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="pressure"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};
