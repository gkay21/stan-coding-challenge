import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { fetchFeed } from "./feed"; // Update the path accordingly

// Create a type for the fetch response to mimic the Fetch API's behavior
function createFetchResponse(data: any): Response {
  return new Response(JSON.stringify(data));
}

const mockApiResponse = {
  total: 30,
  entries: [
    ...Array.from({ length: 30 }, (_, i) => ({
      title: `Test Movie ${i + 3}`,
      description: `Description of Test Movie ${i + 3}`,
      programType: "movie",
      images: {
        "Poster Art": {
          url: `http://example.com/poster${i + 3}.jpg`,
          width: 100,
          height: 100,
        },
      },
      releaseYear: 2011 + i,
    })),
  ],
};

describe("fetchFeed", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should return a list of entries on successful fetch", async () => {
    vi.mocked(fetch).mockResolvedValue(createFetchResponse(mockApiResponse));

    const result = await fetchFeed();

    expect(result).toEqual(mockApiResponse.entries);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(import.meta.env.VITE_FEED_URL);
  });

  it("should throw an error on fetch failure", async () => {
    vi.mocked(fetch).mockResolvedValue({
      ok: false,
    } as Response);

    await expect(fetchFeed()).rejects.toThrow("Network response was not ok");
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(import.meta.env.VITE_FEED_URL);
  });
});
