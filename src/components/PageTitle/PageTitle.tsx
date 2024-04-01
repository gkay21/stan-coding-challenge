import { boxShadow, horizontalPadding } from "@/theme";
import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { styled } from "styled-components";

const Wrapper = styled.div`
  padding: 20px ${(props) => props.theme.horizontalPadding.xxl};
  background-color: ${(props) => props.theme.palette.secondary.main};

  ${horizontalPadding}
  ${boxShadow}
`;

const Heading = styled.h1`
  color: ${(props) => props.theme.palette.secondary.contrastText};
`;

const getPageTitle = (pathname: string): string => {
  switch (pathname) {
    case "/movies":
      return "Movies";
    case "/series":
      return "Series";
    default:
      return "Titles";
  }
};

const PageTitle: React.FC = () => {
  const location = useLocation();

  const title = useMemo(
    () => getPageTitle(location.pathname),
    [location.pathname]
  );

  return (
    <Wrapper>
      <Heading data-testid="page-title-heading">Popular {title}</Heading>
    </Wrapper>
  );
};

export default PageTitle;
