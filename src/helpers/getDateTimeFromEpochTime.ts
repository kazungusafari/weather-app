import moment from "moment";

export const getDateTimeFromEpochTime = (epochTime: number) =>
    moment.unix(epochTime).format('LLLL')
export const getDayOfWeekFromEpochTime = (epochTime: number) => moment.unix(epochTime).format('dddd')

export const getTimeFromEpochTime = (epochTime: number) => moment.unix(epochTime).format('h:mm:ss a')
