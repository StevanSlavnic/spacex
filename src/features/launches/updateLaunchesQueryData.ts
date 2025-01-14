import { InfiniteData, useQueryClient } from "@tanstack/react-query";
import { Launch, LaunchData } from "../../types";
import { LAUNCHES_QUERY_KEY } from "../../constants";
import { isLaunchFavourite } from "../../utils/favouriteLaunches";

interface UpdateLaunchesQueryDataProps {
    data: InfiniteData<LaunchData> | undefined;
    queryClient: ReturnType<typeof useQueryClient>
}

export const updateLaunchesQueryData = ({ data, queryClient }: UpdateLaunchesQueryDataProps) => {
    return data && queryClient.setQueryData([LAUNCHES_QUERY_KEY], () => {
        return {
            ...data,
            pages: data?.pages.map((page: LaunchData) => {
                return {
                    ...page,
                    docs: page.docs.map((launch: Launch) => {
                        return {
                            ...launch,
                            favorited: isLaunchFavourite(launch.id),
                        };
                    }),
                };
            }),
        };
    });
};