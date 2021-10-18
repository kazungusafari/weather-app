import { useEffect } from "react";

export const SearchHistory = ({ recentSearches, getRecentSearches }: any) => {
  useEffect(() => {
    getRecentSearches();
  }, []);

  const renderRecentSearches = () => {
    let recentSearchesLen = recentSearches.length;
    if (recentSearchesLen > 0) {
      return recentSearches.map(
        (data: { city: string; id: number }, index: number) => {
          return (
            <p key={index}>
              City : &nbsp;
              {data.city}
            </p>
          );
        }
      );
    } else {
      return <p>No Searches history</p>;
    }
  };

  return (
    <main>
      <div>{renderRecentSearches()}</div>
    </main>
  );
};
