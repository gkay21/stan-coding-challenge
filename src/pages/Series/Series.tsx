import Card from "@/components/Card/Card";
import { styled } from "styled-components";
import { seriesQuery } from "@/api/series";
import { useCustomQuery } from "@/hooks/useCustomQuery";
import { Entry } from "@/types";
import Loading from "@/components/Loading/Loading";
import Error from "@/components/Error/Error";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Series = () => {
  const { data, status } = useCustomQuery<Entry[]>("Series List", () =>
    seriesQuery()
  );

  if (status === "loading") return <Loading />;
  if (status === "error") return <Error />;
  return (
    <Wrapper data-testid="page-series-wrapper">
      {data?.map((i) => (
        <Card key={i.title} title={i.title} img={i.images["Poster Art"].url} />
      ))}
    </Wrapper>
  );
};

export default Series;
