import Card from "@/components/Card/Card";
import React from "react";
import { styled } from "styled-components";
import Placeholder from "@assets/placeholder.png";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const CardLink = styled(Link)`
  text-decoration: none;
`;

const Home: React.FC = () => {
  return (
    <Wrapper>
      <CardLink data-testid="index-series-card" to="/series">
        <Card title="Popular Series" img={Placeholder} overlayText="Series" />
      </CardLink>
      <CardLink data-testid="index-movies-card" to="/movies">
        <Card title="Popular Movies" img={Placeholder} overlayText="Movies" />
      </CardLink>
    </Wrapper>
  );
};

export default Home;
