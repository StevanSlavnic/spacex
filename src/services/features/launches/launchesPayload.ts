import { LIMIT, OFFSET } from "../../../constants"

interface PayloadParams {
    yearValue: string;
    searchValue: string;
    pageParam: number;
}

export const launchesPayload = ({ yearValue, searchValue, pageParam }: PayloadParams) => {
    return {
        query: {
            ...(yearValue && {
                date_utc: {
                    "$gte": `${yearValue}-01-01T00:00:00Z`,
                    "$lte": `${yearValue}-12-31T23:59:59Z`
                }
            }),
            ...(searchValue && {
                name: {
                    "$regex": searchValue,
                    "$options": "i"
                }
            }),
        },
        options: {
            offset: pageParam * OFFSET,
            limit: LIMIT,
            select: { "name": 1, "date_utc": 1, "success": 1, "links.patch.small": 1, "links.patch.large": 1 },
        }
    }
}