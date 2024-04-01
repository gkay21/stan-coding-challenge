import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Card from "./Card";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@/theme"; // Adjust the import path to your theme file

describe("Card", () => {
  it("renders correctly with all params", () => {
    const { getByTestId, getByText } = render(
      <ThemeProvider theme={defaultTheme}>
        <Card title="Test Card" img="/test-image.jpg" overlayText="Overlay" />
      </ThemeProvider>
    );

    expect(getByTestId("card-wrapper")).toBeInTheDocument();

    expect(getByTestId("card-image")).toBeInTheDocument();

    // Check if title is rendered
    expect(getByText("Test Card")).toBeInTheDocument();

    // Check if overlay text is rendered
    expect(getByText("Overlay")).toBeInTheDocument();
  });

  it("renders correctly without overlay", () => {
    const { queryByTestId, getByTestId, getByText } = render(
      <ThemeProvider theme={defaultTheme}>
        <Card title="Test Card" img="/test-image.jpg" />
      </ThemeProvider>
    );

    expect(getByTestId("card-wrapper")).toBeInTheDocument();

    // Check if title is rendered
    expect(getByText("Test Card")).toBeInTheDocument();

    // Check if overlay text is rendered
    expect(queryByTestId("card-image-overlay")).toBeNull();
  });
});
