import { ErrorString, Loading } from "../components";
import { useSearchHistory } from "../hooks";
import { WithSearchHistoryProps } from "../types";

export function withSearchHistory<T>(Component: React.ComponentType<T>) {
  return (props: Omit<T, keyof WithSearchHistoryProps>) => {
    const { recentSearches, isLoading, isError } = useSearchHistory();

    if (isLoading) return <Loading />;
    else if (isError)
      return <ErrorString error="Could not fetch search history" />;
    else {
      return <Component {...(props as T)} searchHistory={recentSearches} />;
    }
  };
}
