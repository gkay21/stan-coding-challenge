import React, { PropsWithChildren } from "react";
import { styled } from "styled-components";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "text" | "contained";
  // should probably allow for custom theme colours
}

const Wrapper = styled.button<IProps>`
  padding: 10px;
  background-color: ${(props) =>
    props.variant === "text"
      ? "transparent"
      : props.theme.palette.secondary.main};
  color: ${(props) => props.theme.palette.secondary.contrastText};
  border: none;
  font-size: 0.8rem;
`;

const Btn = ({ children, variant, ...props }: PropsWithChildren<IProps>) => (
  <Wrapper {...props} role="button" variant={variant}>
    {children}
  </Wrapper>
);

export default Btn;
