import { ApiResponse, Entry } from "@/types";

export const fetchFeed = async (): Promise<Entry[]> => {
  const res = await fetch(import.meta.env.VITE_FEED_URL);
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  const { entries } = (await res.json()) as ApiResponse;

  return entries;
};
