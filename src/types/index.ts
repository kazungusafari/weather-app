import { BasicField } from "@formfield/react";
import { FormFieldError } from "@formfield/react/dist/Types";
import { Action, ThunkAction } from "@reduxjs/toolkit";
import { store } from "../store";

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

export type HistoricalWeatherDataT = {
    dt: number,
    temp: number,
    pressure: number,
    humidity: number
}

export type HistoricalWeatherInformationProps = {
    historicalWeatherData: HistoricalWeatherDataT[];
};

export type WeatherInformationProps = {
    weatherInformation: WeatherInformationT;
};

export type HistoricalDataT = {
    lat: number,
    lon: number,
    timezone: string,
    timezone_offset: number,
    current: {
        dt: number,
        sunrise: number,
        sunset: number,
        temp: number,
        feels_like: number,
        pressure: number,
        humidity: number,
        dew_point: number,
        uvi: number,
        clouds: number,
        visibility: number,
        wind_speed: number,
        wind_deg: number,
        wind_gust: number
    },
    weather: [{
        id: number,
        main: string,
        description: string,
        icon: string
    }]
    hourly: [{
        dt: number,
        temp: number,
        feels_like: number,
        pressure: number,
        humidity: number,
        dew_point: number,
        uvi: number,
        clouds: number,
        visibility: number,
        wind_speed: number,
        wind_deg: number,

    }]
}


export type Search = {
    id: number;
    city: string;
}

export type SearchHistoryProps = {
    recentSearches: Search[];
    getRecentSearches: () => void;
    isLoading: boolean;
    isError: boolean;
};

export type WeatherInformationT = {
    name: string;
    description: string;
    temperature: number;
    humidity: number;
    pressure: number;
    windSpeed: number;
    dateTime: string;
}

type Handler = (field: BasicField) => void;

export type SearchInputProps = {
    fieldValueHandler: Handler;
    fieldErrorHandler: Handler;
    isFieldTouched: boolean;
    value: string;
    fieldErrors: string;
};

export type HistoricalWeatherInformationInputs = {
    dt: number;
    lat: number;
    lon: number;
};

export type WeatherAppProps = {
    historicalWeatherData: { dt: number, temp: number, pressure: number, humidity: number }[];
    historicalWeatherDataisLoading: boolean;
    getWeatherData: (data: string) => void;
    historicalWeatherDataisError: boolean;
    currentWeatherDataIsError: boolean;
    currentWeatherData: WeatherInformationT;
    currentWeatherDataIsLoading: boolean;
};


export type CurrentWeather = {
    name: string;
    description: string;
    temperature: number;
    humidity: number;
    pressure: number;
    dateTime: string;
    windSpeed: number;
}

export type WeatherResponseData = {
    coord: {
        lon: number,
        lat: number
    },
    weather: [
        {
            id: number,
            main: string,
            description: string,
            icon: string
        }
    ],
    base: string,
    main: {
        temp: number,
        feels_like: number,
        temp_min: number,
        temp_max: number,
        pressure: number,
        humidity: number,
        sea_level: number,
        grnd_level: number
    },
    visibility: number,
    wind: {
        speed: number,
        deg: number,
        gust: number
    },
    clouds: {
        all: number
    },
    dt: number,
    sys: {
        type: number,
        id: number,
        country: string,
        sunrise: number,
        sunset: number
    },
    timezone: number,
    id: number,
    name: string,
    cod: number
}

export type HistoricalData = { dt: number, temp: number, pressure: number, humidity: number }

export type HistoricalResponseData = {
    dt: number,
    temp: number,
    feels_like: number,
    pressure: number,
    humidity: number,
    dew_point: number,
    uvi: number,
    clouds: number,
    visibility: number,
    wind_speed: number,
    wind_deg: number,
    weather: [
        {
            id: number,
            main: string,
            description: string,
            icon: string
        }
    ]
}


export type FormProps = {
    formData: { city: string };
    fieldValueHandler: (field: BasicField) => void;
    setFormError: (error: FormFieldError) => void;
    formHasError: boolean;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}


export type WithHistoricalWeatherDataProps = {
    historicalWeatherData: HistoricalData;
};

export type WithSearchHistoryProps = {
    searchHistory: Search[];
};

export type WithWeatherDataProps = {
    weatherInformation: CurrentWeather;
};

export declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: 'development' | 'production' | 'test'
        PUBLIC_URL: string
        REACT_APP_HASH: string
        REACT_APP_API_URI: string
        REACT_APP_WS_URI: string
    }
}