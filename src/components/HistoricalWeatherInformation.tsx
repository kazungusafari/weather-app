import React from "react";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { withHistoricalWeatherData } from "../hoc";

import { HistoricalWeatherInformationProps } from "../types";

export const HistoricalWeatherInformationW = ({
  historicalWeatherData,
}: HistoricalWeatherInformationProps) => {
  return (
    <>
      <h2>Historical weather information</h2>
      <p>
        Temperatures for the last {historicalWeatherData.length}
        hours
      </p>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart
          width={500}
          height={200}
          data={historicalWeatherData}
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
        Humidity for the last {historicalWeatherData.length} hours
      </p>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart
          width={500}
          height={200}
          data={historicalWeatherData}
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
      <p>Pressure for the last {historicalWeatherData.length} hours</p>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart
          width={500}
          height={200}
          data={historicalWeatherData}
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
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export const HistoricalWeatherInformation = withHistoricalWeatherData(
  HistoricalWeatherInformationW
);
