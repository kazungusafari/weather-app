import { useEffect } from "react";
import { Search, SearchHistoryProps } from "../types";

export const SearchHistory = ({
  recentSearches,
  getRecentSearches,
  isError,
  isLoading,
}: SearchHistoryProps) => {
  useEffect(() => {
    getRecentSearches();
  }, [getRecentSearches]);

  return (
    <main>
      <div>
        {recentSearches &&
          recentSearches.map((data: Search, index: number) => {
            return (
              <p key={index}>
                City : &nbsp;
                {data.city}
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
