import React, { Fragment } from "react";
import {
  ThemeProvider as StyledComponentsThemeProvider,
  createGlobalStyle,
} from "styled-components";
import { defaultTheme } from "@/theme";

/*
  CSS Reset, see:
  http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
const GlobalStyle = createGlobalStyle`
  html, body, button, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  // Additions below
  :root {
    // Add Raleway font
    font-family: "Raleway", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    
    // Responsive font size at any screen width
    font-size: calc(15px + 0.390625vw);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export interface ThemeProviderProps {
  children?: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <Fragment>
      <GlobalStyle />
      <StyledComponentsThemeProvider theme={defaultTheme}>
        {children}
      </StyledComponentsThemeProvider>
    </Fragment>
  );
};

export default ThemeProvider;
