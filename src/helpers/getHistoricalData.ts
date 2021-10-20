import { getTimeFromEpochTime, kToC } from ".";

type HistoricalWeatherInformationProps = {
    dt: any;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    weather: [
        {
            id: number;
            main: string;
            description: string;
            icon: string;
        }
    ];
};

export const getHistoricalData = (arr: HistoricalWeatherInformationProps[]) => {
    const newArr: HistoricalWeatherInformationProps[] = []
    // eslint-disable-next-line array-callback-return
    arr.map((info: HistoricalWeatherInformationProps) => {
        const obj = {} as HistoricalWeatherInformationProps
        obj.dt = getTimeFromEpochTime(info.dt);
        obj.temp = kToC(+info.temp);
        obj.pressure = info.pressure;
        obj.humidity = info.humidity
        newArr.push(obj)
    })

    return newArr;
}





