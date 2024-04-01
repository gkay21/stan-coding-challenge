import { boxShadow, horizontalPadding } from "@/theme";
import React from "react";
import { styled } from "styled-components";
import Btn from "../Button/Button";
import { Link } from "react-router-dom";

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: ${(props) => props.theme.palette.accent.main};
  background: linear-gradient(
    180deg,
    ${(props) => props.theme.palette.accent.accent} 5%,
    ${(props) => props.theme.palette.accent.main} 75%
  );
  background-color: ${(props) => props.theme.palette.accent.main};
  color: ${(props) => props.theme.palette.accent.contrastText};
  z-index: 10;
  cursor: pointer;

  ${horizontalPadding}
  ${boxShadow}
`;

const Logo = styled(Link)`
  font-size: 1.6rem;
  font-weight: 600;
  text-decoration: none;
  color: ${(props) => props.theme.palette.accent.contrastText};
`;

const BtnGroup = styled.div`
  display: flex;
  gap: 20px;
`;

const Nav: React.FC = () => {
  return (
    <Wrapper>
      <Logo data-testid="nav-logo" to="/" aria-label="home">
        DEMO Streaming
      </Logo>
      <BtnGroup>
        <Btn data-testid="log-in-button" aria-label="log in" variant="text">
          Log In
        </Btn>
        <Btn
          data-testid="free-trial-button"
          aria-label="free trial"
          variant="contained"
        >
          Start your free trial
        </Btn>
      </BtnGroup>
    </Wrapper>
  );
};

export default Nav;
