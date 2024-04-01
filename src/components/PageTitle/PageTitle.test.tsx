import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageTitle from "./PageTitle";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@/theme"; // Adjust the import path to your theme file

describe("PageTitle", () => {
  const renderWithRouter = (route: string) => {
    window.history.pushState({}, "", route); // This line changes the browser's URL to the specified route
    return render(
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <Routes>
            <Route path="*" element={<PageTitle />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    );
  };

  it('displays "Popular Movies" when the route is /movies', () => {
    const { getByTestId } = renderWithRouter("/movies");
    expect(getByTestId("page-title-heading")).toHaveTextContent(
      "Popular Movies"
    );
  });

  it('displays "Popular Series" when the route is /series', () => {
    const { getByTestId } = renderWithRouter("/series");
    expect(getByTestId("page-title-heading")).toHaveTextContent(
      "Popular Series"
    );
  });

  it('displays "Popular Titles" for any other routes', () => {
    const { getByTestId } = renderWithRouter("/other");
    expect(getByTestId("page-title-heading")).toHaveTextContent(
      "Popular Titles"
    );
  });
});
