import Card from "@/components/Card/Card";
import { styled } from "styled-components";
import { moviesQuery } from "@/api/movies";
import { useCustomQuery } from "@/hooks/useCustomQuery";
import { Entry } from "@/types";
import Loading from "@/components/Loading/Loading";
import Error from "@/components/Error/Error";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Movies = () => {
  const { data, status } = useCustomQuery<Entry[]>("Movies List", () =>
    moviesQuery()
  );

  if (status === "loading") return <Loading />;
  if (status === "error") return <Error />;

  return (
    <Wrapper data-testid="page-movies-wrapper">
      {data?.map((i) => (
        <Card key={i.title} title={i.title} img={i.images["Poster Art"].url} />
      ))}
    </Wrapper>
  );
};

export default Movies;
