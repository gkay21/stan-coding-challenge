import { describe, expect, it, vi, beforeEach } from "vitest";
import Series from "./Series";
import { fetchFeed } from "@/api/feed";
import { ApiResponse } from "@/types";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@/theme";

// Mock the global fetch function
global.fetch = vi.fn();

// Create a type for the fetch response to mimic the Fetch API's behavior
function createFetchResponse(data: any): Response {
  return new Response(JSON.stringify(data));
}

const mockApiResponse: ApiResponse = {
  total: 2,
  entries: [
    {
      title: "Test Series 1",
      description: "Description of Test Series 1",
      programType: "series",
      images: {
        "Poster Art": {
          url: "http://example.com/poster1.jpg",
          width: 100,
          height: 100,
        },
      },
      releaseYear: 2021,
    },
    {
      title: "Test Series 2",
      description: "Description of Test Series 2",
      programType: "series",
      images: {
        "Poster Art": {
          url: "http://example.com/poster2.jpg",
          width: 100,
          height: 100,
        },
      },
      releaseYear: 2022,
    },
  ],
};

describe("Series Page", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("makes a GET request to fetch series list and returns the result", async () => {
    vi.mocked(fetch).mockResolvedValue(createFetchResponse(mockApiResponse));

    const seriesList = await fetchFeed();

    expect(fetch).toHaveBeenCalledWith(import.meta.env.VITE_FEED_URL);

    expect(seriesList).toStrictEqual(mockApiResponse.entries);
  });

  it("renders movies fetched from the API", async () => {
    vi.mocked(fetch).mockResolvedValue(createFetchResponse(mockApiResponse));

    const { findAllByTestId } = render(
      <ThemeProvider theme={defaultTheme}>
        <Series />
      </ThemeProvider>
    );

    const seriesCards = await findAllByTestId("card-wrapper");
    expect(seriesCards).toHaveLength(2);
  });
});
