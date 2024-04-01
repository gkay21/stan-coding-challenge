import { useState, useEffect, useCallback } from "react";

interface QueryResult<T> {
  data: T | null;
  status: "idle" | "loading" | "success" | "error";
  error: Error | null;
  refetch: () => void;
}

interface CacheItem<T> {
  timestamp: number;
  data: T;
}

const cache: Record<string, CacheItem<any>> = {};
const STALE_TIME = 2 * 60 * 1000; // 2 minute in milliseconds

export const useCustomQuery = <T,>(
  queryKey: string,
  fetcher: () => Promise<T>
): QueryResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    setStatus("loading");
    setError(null);

    if (
      cache[queryKey] &&
      new Date().getTime() - cache[queryKey].timestamp < STALE_TIME
    ) {
      setData(cache[queryKey].data);
      setStatus("success");
    } else {
      try {
        const response = await fetcher();
        cache[queryKey] = { data: response, timestamp: new Date().getTime() };
        setData(response);
        setStatus("success");
      } catch (error) {
        setError(error as Error);
        setStatus("error");
      }
    }
  }, [queryKey, fetcher, setData, setStatus, setError]);

  useEffect(() => {
    fetchData();
  }, [fetchData, queryKey, fetcher]);

  return { data, status, error, refetch: fetchData };
};
