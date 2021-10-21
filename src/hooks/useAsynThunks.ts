import { bindActionCreators } from "redux"
import { useDispatch } from 'react-redux'
import { HistoricalWeatherInformationInputs } from "../types";

export const useAsyncThunks = (asyncThunks: { getHistoricalWeatherInfoByCityAsyncThunk: (args: HistoricalWeatherInformationInputs) => void, getWeatherInfoByCityAsyncThunk: (arg: string) => void }) => {
    const dispatch = useDispatch()
    return bindActionCreators(asyncThunks, dispatch)
}