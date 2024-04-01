import { Entry } from "@/types";
import { fetchFeed } from "./feed";

export const moviesQuery = async () => {
  const feed = await fetchFeed();
  if (!feed) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  const filteredFeed = feed
    .filter(
      (entry: Entry) =>
        entry.programType === "movie" && entry.releaseYear >= 2010
    )
    .sort((a: any, b: any) => a.title.localeCompare(b.title))
    .slice(0, 21);

  return filteredFeed;
};
