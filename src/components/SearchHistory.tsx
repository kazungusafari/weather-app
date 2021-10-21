import { useSearchHistory } from "../hooks/useSearchHistory";
import { Search } from "../types";

export const SearchHistory = () => {
  const { recentSearches, isError, isLoading } = useSearchHistory();

  return (
    <main>
      <div>
        {recentSearches &&
          recentSearches.map((value: Search) => {
            return (
              <p key={value.id}>
                City : &nbsp;
                {value.city}
              </p>
            );
          })}
        {isError && (
          <p>There was an error trying to fetch your search history</p>
        )}
        {isLoading && <p>Loading ...</p>}
      </div>
    </main>
  );
};
