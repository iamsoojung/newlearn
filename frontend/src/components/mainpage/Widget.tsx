import styled from "styled-components";

import CategoryChart from "@components/CategoryChart";
import ProfileWidget from "./ProfileWidget";
import RankingWidget from "./RankingWidget";

type CountDataKey =
  | "economyCount"
  | "politicsCount"
  | "societyCount"
  | "cultureCount"
  | "scienceCount"
  | "globalCount";

type CountData = {
  [K in CountDataKey]: number;
};

const Widget: React.FC<{ variety: string }> = ({ variety }) => {
  const countData: CountData = {
    economyCount: 7,
    politicsCount: 12,
    societyCount: 4,
    cultureCount: 16,
    scienceCount: 3,
    globalCount: 7,
  };

  switch (variety) {
    case "profile":
      return (
        <Container>
          <Descripsion>My Information</Descripsion>
          <ProfileWidget />
        </Container>
      );
    case "chart":
      return (
        <Container>
          <Descripsion>Learn Category</Descripsion>
          <CategoryChart countData={countData} />
        </Container>
      );
    case "ranking":
      return (
        <Container>
          <Descripsion>Ranking</Descripsion>
          <RankingWidget />
        </Container>
      );
    case "goal":
      return (
        <Container>
          <Descripsion>study goal</Descripsion>
        </Container>
      );
  }
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  aspect-ratio: 1;
  background-color: ${(props) => props.theme.colors.cardBackground + "BF"};
  border-radius: 0.75rem;
  transition: box-shadow 0.5s;
  backdrop-filter: blur(4px);
  box-shadow: 0.5rem 0.5rem 0.25rem ${(props) => props.theme.colors.shadow};
  .middle-space {
    width: 10rem;
    margin: 0 1rem;
  }
`;

const Descripsion = styled.div`
  position: absolute;
  top: -1.5rem;
  left: 0.25rem;
  font-size: 0.875rem;
`;

export default Widget;
