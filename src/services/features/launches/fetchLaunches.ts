import { featureFetch } from "../../featureFetch";
import { launchesPayload } from "./launchesPayload";

import { SPACEX_SEARCH_PATH_LAUNCHES } from "../../../constants";

export interface ApiParams { pageParam: number; yearValue: string; searchValue: string; }

export const fetchLaunches = async ({
    pageParam,
    yearValue,
    searchValue
}: ApiParams) => {
    const payload = launchesPayload({ pageParam, yearValue, searchValue })
    return await featureFetch({ path: SPACEX_SEARCH_PATH_LAUNCHES, payload })
}