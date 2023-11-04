import styled from "styled-components";

const Game = ({
  chosenCard,
  onPlayAgain,
  houseCard,
  setHouseCard,
  result,
  setResult,
}) => {
  return (
    <GameWrapper>
      <LetsPlay>
        <ChoiceWrapper>
          <ChosenCard>
            {chosenCard && (
              <img
                src={chosenCard.image}
                alt={chosenCard.name}
                style={{ width: "130px", height: "133px" }}
              />
            )}
          </ChosenCard>
          <Choice>YOU PICKED</Choice>
        </ChoiceWrapper>
        <ChoiceWrapper>
          <ChosenCard>
            {houseCard && (
              <img
                src={houseCard.image}
                alt={houseCard.name}
                style={{ width: "130px", height: "133px" }}
              />
            )}
          </ChosenCard>
          <Choice>THE HOUSE PICKED</Choice>
        </ChoiceWrapper>
      </LetsPlay>
      <Winner>{result}</Winner>
      <Button onClick={onPlayAgain}>PLAY AGAIN</Button>
    </GameWrapper>
  );
};

export default Game;

const LetsPlay = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
`;

const GameWrapper = styled.div`
  color: #fff;
  text-align: center;
  text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
  font-family: Barlow Semi Condensed;
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 99px;
`;

const ChoiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
  align-items: center;
`;

const ChosenCard = styled.div`
  width: 130px;
  height: 133px;
  flex-shrink: 0;
  border-radius: 50%;
  /* background-color: black;
  opacity: 0.1;
  z-index: 5; */
`;

const Choice = styled.span`
  color: #fff;
  text-align: center;
  text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
  font-family: Barlow Semi Condensed;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 1.875px;
`;

const Winner = styled.div`
  color: #fff;
  text-align: center;
  text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
  font-family: Barlow Semi Condensed;
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Button = styled.button`
  width: 220px;
  height: 48px;
  border-radius: 8px;
  background: linear-gradient(0deg, #f3f3f3 0%, #fff 100%);
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
  color: #3b4262;
  font-family: Barlow Semi Condensed;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 2.5px;
  text-transform: uppercase;
`;
