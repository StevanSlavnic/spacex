import { FAVORITE_LAUNCHES_QUERY_KEY } from "../constants";
import { Launch } from "../types";

export const handleLaunchInLocalStorage = (launch: Launch): void => {
    const launches: Launch[] = JSON.parse(localStorage.getItem(FAVORITE_LAUNCHES_QUERY_KEY) || '[]');

    if (launches.some(item => item.id === launch.id)) {
        const updatedlaunches = launches.filter(item => item.id !== launch.id);
        localStorage.setItem(FAVORITE_LAUNCHES_QUERY_KEY, JSON.stringify(updatedlaunches));
    } else {
        localStorage.setItem(FAVORITE_LAUNCHES_QUERY_KEY, JSON.stringify([{ ...launch, favorited: true }, ...launches]));
    }
};

export const isLaunchFavourite = (id: string): boolean => {
    const launches: Launch[] = JSON.parse(localStorage.getItem(FAVORITE_LAUNCHES_QUERY_KEY) || '[]');
    return launches.some(launch => launch.id === id);
}




