import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { fetchFeed } from "./feed";
import { seriesQuery } from "./series";

// Create a type for the fetch response to mimic the Fetch API's behavior
function createFetchResponse(data: any): Response {
  return new Response(JSON.stringify(data));
}

const mockApiResponse = (n: number) => ({
  total: n,
  entries: [
    ...Array.from({ length: n }, (_, i) => ({
      title: `Test Movie ${i + 3}`,
      description: `Description of Test Movie ${i + 3}`,
      programType: "series",
      images: {
        "Poster Art": {
          url: `http://example.com/poster${i + 3}.jpg`,
          width: 100,
          height: 100,
        },
      },
      releaseYear: 2000 + i,
    })),
  ],
});

describe("moviesQuery", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should filter and return only movies from 2010 onwards", async () => {
    vi.mocked(fetch).mockResolvedValue(
      createFetchResponse(mockApiResponse(30))
    );

    const result = await seriesQuery();

    expect(result).toHaveLength(20);
    expect(result[0].title).toBe("Test Movie 13");
  });

  it("should return an empty list if no movies match the criteria", async () => {
    vi.mocked(fetch).mockResolvedValue(createFetchResponse(mockApiResponse(0)));

    const result = await seriesQuery();

    expect(result).toHaveLength(0);
  });

  it("should throw an error if fetchFeed fails", async () => {
    vi.mocked(fetch).mockResolvedValue({
      ok: false,
    } as Response);

    await expect(fetchFeed()).rejects.toThrow("Network response was not ok");
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(import.meta.env.VITE_FEED_URL);
  });
});
