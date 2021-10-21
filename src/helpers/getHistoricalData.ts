/* eslint-disable array-callback-return */
import { getTimeFromEpochTime, kToC } from "../helpers";
import { HistoricalData, HistoricalResponseData } from "../types";

export const getHistoricalData = (arr: HistoricalResponseData[]) => {
    const newArr: HistoricalData[] = []
    arr.map((info: HistoricalResponseData) => {
        const obj = {} as HistoricalData;
        obj.dt = +getTimeFromEpochTime(info.dt);
        obj.temp = kToC(+info.temp);
        obj.pressure = info.pressure;
        obj.humidity = info.humidity
        newArr.push(obj)
    })
    return newArr;
}





