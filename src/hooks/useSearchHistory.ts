
import { useEffect } from "react";
import { getSearchAsyncThunk } from "../features";
import { getSearchHistory } from "../selectors"
import { useAppDispatch, useAppSelector } from "./reacthooks"

export const useSearchHistory = () => {
    const dispatch = useAppDispatch()
    const searchHistoryResult = useAppSelector(getSearchHistory);
    useEffect(() => {
        dispatch(getSearchAsyncThunk())
    }, [dispatch]);
    return {
        ...searchHistoryResult,
    }
}