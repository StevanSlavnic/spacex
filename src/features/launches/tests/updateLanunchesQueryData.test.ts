import { QueryClient } from "@tanstack/react-query";
import { updateLaunchesQueryData } from "../updateLaunchesQueryData";
import { LAUNCHES_QUERY_KEY } from "../../../constants";
import { isLaunchFavourite } from "../../../utils/favouriteLaunches";
import { InfiniteData } from "@tanstack/react-query";
import { LaunchData } from "../../../types";
import { launchesMock } from "../../../mocks/launches.mock";

// Mock the isLaunchFavourite function
jest.mock("../../../utils/favouriteLaunches", () => ({
    isLaunchFavourite: jest.fn(),
}));

const mockQueryClient = new QueryClient();

describe("updateLaunchesQueryData", () => {
    it("updates the query data with favorited launches", () => {
        const mockData: InfiniteData<LaunchData> = {
            pages: [
                {
                    docs: launchesMock,
                    hasNextPage: false,
                    hasPrevPage: false,
                    limit: 10,
                    page: 1,
                    totalDocs: 2,
                    totalPages: 1,
                    nextPage: null,
                    offset: 0,
                    pagingCounter: 1,
                    prevPage: null,
                    isSearch: false,
                },
            ],
            pageParams: [],
        };

        (isLaunchFavourite as jest.Mock).mockImplementation((id: string) => id === "1");

        updateLaunchesQueryData({ data: mockData, queryClient: mockQueryClient });

        const updatedData = mockQueryClient.getQueryData([LAUNCHES_QUERY_KEY]);

        expect(updatedData).toEqual({
            ...mockData,
            pages: [
                {
                    ...mockData.pages[0],
                    docs: launchesMock.map((launch) => ({
                        ...launch,
                        favorited: launch.id === "1",
                    })),
                },
            ],
        });
    });
});