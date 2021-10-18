import Dexie from 'dexie'

export interface Search {
    id?: number;
    city?: string;

}

class RecentSearchesDatabase extends Dexie {
    public recentSearches: Dexie.Table<Search, number>;

    public constructor() {
        super("RecentSerchesDatabase");
        this.version(1).stores({
            recentSearches: "++id,city"
        });
        this.recentSearches = this.table("recentSearches");
    }

    get getRecentSearches() {
        return this.recentSearches.toArray()
    }

    addSearch(search: { city: string }) {
        return this.recentSearches.add(search)
    }

}

const db = new RecentSearchesDatabase();
export default db