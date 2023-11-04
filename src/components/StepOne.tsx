import styled from "styled-components";
import { default as data } from "../data.ts";
import { polygon } from "../images";

const StepOne = ({ onChooseCard }) => {
  const gameItemKeys = Object.keys(data);

  return (
    <Cards>
      <FirstRow>
        {gameItemKeys.slice(0, 1).map((key, index) => (
          <GameCard key={index} onClick={() => onChooseCard(data[key])}>
            <img src={data[key].image} alt={data[key].name} />
          </GameCard>
        ))}
      </FirstRow>
      <SecondRow>
        {gameItemKeys.slice(1, 3).map((key, index) => (
          <GameCard key={index} onClick={() => onChooseCard(data[key])}>
            <img src={data[key].image} alt={data[key].name} />
          </GameCard>
        ))}
      </SecondRow>
      <ThirdRow>
        {gameItemKeys.slice(3, 5).map((key, index) => (
          <GameCard key={index} onClick={() => onChooseCard(data[key])}>
            <img src={data[key].image} alt={data[key].name} />
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
`;
const FirstRow = styled.div`
  height: 97px;
  width: 311px;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;
const SecondRow = styled.div`
  height: 97px;
  width: 311px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;
const ThirdRow = styled.div`
  height: 97px;
  width: 311px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`;

const GameCard = styled.div`
  cursor: pointer;
  width: 96px;
  height: 97px;
`;
