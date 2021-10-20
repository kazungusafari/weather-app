import { RootState } from "../types"

export const getSearchHistory = (state: RootState) => {
    const { isLoading, isError, data } = state.searchHistory
    return {
        recentSearches: data,
        isError: isError,
        isLoading: isLoading
    }
}