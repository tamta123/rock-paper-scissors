import styled from "styled-components";
import { GameData, default as data } from "../data.ts";
import { polygon } from "../images";

interface StepOneProps {
  onChooseCard: (Card: GameData) => void;
}

const StepOne: React.FC<StepOneProps> = ({ onChooseCard }) => {
  const gameItemKeys = Object.keys(data) as Array<keyof typeof data>;

  return (
    <Cards>
      <FirstRow>
        {gameItemKeys.slice(0, 1).map((key, index) => (
          //@ts-ignore
          <GameCard key={index} onClick={() => onChooseCard(data[key])}>
            {/* @ts-ignore */}
            <Img src={data[key]?.image} alt={data[key].name} />
          </GameCard>
        ))}
      </FirstRow>
      <SecondRow>
        {gameItemKeys.slice(1, 3).map((key, index) => (
          //@ts-ignore
          <GameCard key={index} onClick={() => onChooseCard(data[key])}>
            {/* @ts-ignore */}
            <Img src={data[key].image} alt={data[key].name} />
          </GameCard>
        ))}
      </SecondRow>
      <ThirdRow>
        {gameItemKeys.slice(3, 5).map((key, index) => (
          //@ts-ignore
          <GameCard key={index} onClick={() => onChooseCard(data[key])}>
            {/* @ts-ignore */}
            <Img src={data[key].image} alt={data[key].name} />
          </GameCard>
        ))}
      </ThirdRow>
    </Cards>
  );
};

export default StepOne;

const Cards = styled.div`
  width: 311px;
  height: 305px;
  display: flex;
  flex-direction: column;
  background-image: url(${polygon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 227px 227px;
  margin-top: 95px;
  @media (min-width: 768px) {
    background-size: 345px 345px;
    width: 430px;
  }
`;
const FirstRow = styled.div`
  height: 97px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  @media (min-width: 768px) {
    margin-top: -30px;
  }
`;
const SecondRow = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 26px;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;
const ThirdRow = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`;

const GameCard = styled.div`
  cursor: pointer;
  width: 96px;
  height: 97px;
  @media (min-width: 768px) {
    width: 145px;
    height: 148px;
  }
`;
const Img = styled.img`
  @media (min-width: 768px) {
    width: 145px;
    height: 148px;
  }
`;
