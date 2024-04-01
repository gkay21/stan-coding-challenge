// styled.d.ts
import "styled-components";

interface ISize {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

interface IPalette {
  main: string;
  contrastText: string;
  accent: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    shadow: string;
    horizontalPadding: ISize;
    palette: {
      primary: IPalette;
      secondary: IPalette;
      tertiary: IPalette;
      accent: IPalette;
    };
  }
}
