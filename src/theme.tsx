import { DefaultTheme, css } from "styled-components";
import { device } from "./breakpoints";

export const defaultTheme: DefaultTheme = {
  borderRadius: "4px",
  horizontalPadding: {
    xs: "5px",
    sm: "25px",
    md: "50px",
    lg: "80px",
    xl: "80px",
    xxl: "80px",
  },
  shadow: "0px 3px 9px 0px rgba(0,0,0,0.6)",
  palette: {
    primary: {
      main: "#ffffff",
      contrastText: "#31312f",
      accent: "#006fff",
    },
    secondary: {
      main: "#414141",
      contrastText: "#ffffff",
      accent: "#006fff",
    },
    tertiary: {
      main: "#1e1e1e",
      contrastText: "#ffffff",
      accent: "#94979c",
    },
    accent: {
      main: "#0069ff",
      contrastText: "#ffffff",
      accent: "#0090ff",
    },
  },
};

export const boxShadow = css`
  box-shadow: ${(props) => props.theme.shadow};
  -webkit-box-shadow: ${(props) => props.theme.shadow};
  -moz-box-shadow: ${(props) => props.theme.shadow};
`;

export const horizontalPadding = css`
  @media ${device.xxl} {
    padding-left: ${(props) => props.theme.horizontalPadding.xxl};
    padding-right: ${(props) => props.theme.horizontalPadding.xxl};
  }
  @media ${device.xl} {
    padding-left: ${(props) => props.theme.horizontalPadding.xl};
    padding-right: ${(props) => props.theme.horizontalPadding.xl};
  }
  @media ${device.lg} {
    padding-left: ${(props) => props.theme.horizontalPadding.lg};
    padding-right: ${(props) => props.theme.horizontalPadding.lg};
  }
  @media ${device.md} {
    padding-left: ${(props) => props.theme.horizontalPadding.md};
    padding-right: ${(props) => props.theme.horizontalPadding.md};
  }
  @media ${device.sm} {
    padding-left: ${(props) => props.theme.horizontalPadding.sm};
    padding-right: ${(props) => props.theme.horizontalPadding.sm};
  }
  @media ${device.xs} {
    padding-left: ${(props) => props.theme.horizontalPadding.xs};
    padding-right: ${(props) => props.theme.horizontalPadding.xs};
  }
`;
