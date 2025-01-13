import { useSearchContext } from '../../context/SearchContext';
import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query'
import { fetchLaunches } from '../../services/features/launches/fetchLaunches';
import { updateLaunchesQueryData } from './updateLaunchesQueryData';

import { LAUNCHES_QUERY_KEY } from '../../constants';

import { LaunchData } from '../../types';


export interface InfiniteData<TData> {
    pages: TData[]
    pageParams: unknown[]
}

export const getLaunches = () => {
    const { yearValue, searchValue } = useSearchContext();
    const queryClient = useQueryClient();
    const {
        data,
        fetchNextPage,
        isError,
        isLoading,
        hasNextPage,
        isFetched,
        isFetching,
    } = useInfiniteQuery({
        queryKey: [LAUNCHES_QUERY_KEY, { yearValue, searchValue }],
        queryFn: async ({ pageParam = 0 }) =>
            fetchLaunches({ pageParam, yearValue, searchValue }),
        initialPageParam: 0,
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.docs.length === 0) {
                return undefined;
            }
            return pages.length;
        },
    });

    updateLaunchesQueryData({ data, queryClient });

    return {
        launches: (updateLaunchesQueryData({ data, queryClient }) as InfiniteData<LaunchData>)?.pages.flatMap((page: LaunchData) => page.docs) ?? [],
        fetchNextPage,
        isLoading,
        hasNextPage,
        isFetched,
        isFetching,
        isError,
    }
}
