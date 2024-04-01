import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { useCustomQuery } from "./useCustomQuery"; // Adjust the import path to your useCustomQuery hook

function TestComponent({
  queryKey,
  fetcher,
}: {
  queryKey: string;
  fetcher: () => Promise<any>;
}) {
  const { data, status, error } = useCustomQuery(queryKey, fetcher);
  return (
    <div>
      <div>Status: {status}</div>
      <div>Error: {error ? error.message : "None"}</div>
      <div>Data: {JSON.stringify(data)}</div>
    </div>
  );
}

describe("useCustomQuery", () => {
  it("should fetch data successfully", async () => {
    const fetcher = vi.fn(() =>
      Promise.resolve([{ id: 1, title: "Test Query" }])
    );
    const queryKey = "test-query";

    const { findByText } = render(
      <TestComponent queryKey={queryKey} fetcher={fetcher} />
    );

    expect(await findByText("Status: success")).toBeInTheDocument();
    expect(fetcher).toHaveBeenCalledTimes(1);
    expect(await findByText(/Test Query/)).toBeInTheDocument();
  });

  it("should handle fetch error", async () => {
    const fetcher = vi.fn(() => Promise.reject(new Error("Fetch failed")));
    const queryKey = "test-error";

    const { findByText } = render(
      <TestComponent queryKey={queryKey} fetcher={fetcher} />
    );

    expect(await findByText("Status: error")).toBeInTheDocument();
    expect(fetcher).toHaveBeenCalledTimes(1);
    expect(await findByText("Error: Fetch failed")).toBeInTheDocument();
  });
});
