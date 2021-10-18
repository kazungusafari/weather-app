import { getTimeFromEpochTime } from "./getDateTimeFromEpochTime";
import { kToC } from "./kToC";

type Weather = {
    dt: string
    temp: number,
    pressure: string,
    humidity: string
}

export const getNewArray = (arr: Weather[]) => {
    const newArr: Weather[] = []
    // eslint-disable-next-line array-callback-return
    arr.map((info: Weather) => {
        const obj: Weather = { dt: '', temp: 21, pressure: '', humidity: '' }
        obj.dt = getTimeFromEpochTime(+info.dt);
        obj.temp = kToC(+info.temp);
        obj.pressure = info.pressure;
        obj.humidity = info.humidity
        newArr.push(obj)
    })

    return newArr;
}





