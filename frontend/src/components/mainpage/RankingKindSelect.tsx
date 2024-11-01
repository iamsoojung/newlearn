import { selectedRankingState } from "@store/selectedRankingState";
import { useRecoilState } from "recoil";
import styled from "styled-components";

const RankingKindSelect = () => {
  const [selectedType, setSelectedType] = useRecoilState(selectedRankingState);

  return (
    <RankingKindContainer $type={selectedType}>
      <RankingKind
        $isSelected={selectedType === "point"}
        $type="point"
        onClick={() => setSelectedType("point")}
      >
        포인트왕
      </RankingKind>
      <RankingKind
        $isSelected={selectedType === "read"}
        $type="read"
        onClick={() => setSelectedType("read")}
      >
        다독왕
      </RankingKind>
    </RankingKindContainer>
  );
};

export default RankingKindSelect;

const RankingKindContainer = styled.div<{ $type: "point" | "read" }>`
  display: flex;
  align-items: center;
  position: relative;
  width: 9.5rem;
  height: 10%;
  margin: 0 auto;
  padding: 0 1rem;
  color: white;
  border-radius: 1rem;
  background-color: white;
  font-weight: 500;
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    transform: ${(props) =>
      props.$type === "point" ? "translateX(0)" : "translateX(5.5rem)"};
    transition: transform 0.5s;
    border-radius: 1rem;
    background-color: ${(props) => props.theme.colors.primary};
    width: 4rem;
    padding: 0 1rem;
  }

  @media (max-width: 767px) {
    margin: 0;
    position: absolute;
    right: 1rem;
    top: -0.4rem;
    height: 2rem;
  }
`;

const RankingKind = styled.div<{
  $isSelected: boolean;
  $type: "point" | "read";
}>`
  position: absolute;
  z-index: 1;
  width: 5rem;
  color: ${(props) => (props.$isSelected ? "white" : "black")};
  transition: color 0.5s;
  font-size: 1rem;
  text-align: center;
  left: ${(props) => (props.$type === "point" ? "0.5rem" : "6rem")};
`;
