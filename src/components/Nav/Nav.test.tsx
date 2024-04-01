import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Nav from "./Nav"; // Adjust the import path to match your file structure
import { defaultTheme } from "@/theme"; // Adjust the import path to your theme file

describe("Nav", () => {
  it("renders correctly and displays the logo and buttons", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <Nav />
        </ThemeProvider>
      </BrowserRouter>
    );

    // Check for the logo
    const logo = getByTestId("nav-logo");
    expect(logo).toHaveTextContent("DEMO Streaming");

    // Check for the login button
    const loginButton = getByTestId("log-in-button");
    expect(loginButton).toHaveTextContent("Log In");

    // Check for the free trial button
    const freeTrialButton = getByTestId("free-trial-button");
    expect(freeTrialButton).toHaveTextContent("Start your free trial");
  });
});
