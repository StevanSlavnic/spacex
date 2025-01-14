export type Launch = {
    id: string;
    name: string;
    date_utc: string;
    success: boolean;
    links: {
        patch: {
            small: string;
            large: string;
        };
    };
    favorited: boolean;
}

export interface LaunchData {
    docs: Launch[];
    hasNextPage: boolean;
    hasPrevPage: boolean;
    limit: number;
    nextPage: number | null;
    offset: number;
    page: number;
    pagingCounter: number;
    prevPage: number | null;
    totalDocs: number;
    totalPages: number;
    isSearch: boolean;
}

export interface LaunchesListProps {
    launches: Launch[];
    fetchNextPage: () => void;
    isLoading: boolean;
    hasNextPage: boolean;
}
