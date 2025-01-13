import { SPACEX_URL } from "../constants"

interface FetchParams {
    path: string;
    payload: {
        query?: Record<string, any>,
        options?: Record<string, any>
    }
}

export const featureFetch = async ({ path, payload }: FetchParams) => {
    const res = await fetch(`${SPACEX_URL}${path}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ...payload
        })
    })

    return await res.json()
}