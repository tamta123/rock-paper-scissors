import styled from "styled-components";

interface Card {
  name: string;
  image: string;
}

interface GameProps {
  chosenCard: Card | null;
  onPlayAgain: () => void;
  houseCard: Card | null;
  setHouseCard: (card: Card | null) => void;
  result: string;
  setResult: (result: string) => void;
}

const Game: React.FC<GameProps> = ({
  chosenCard,
  onPlayAgain,
  houseCard,
  result,
}) => {
  return (
    <GameWrapper>
      <LetsPlay>
        <ChoiceWrapper>
          <ChoiceDesktop>YOU PICKED</ChoiceDesktop>
          <ChosenCard>
            {chosenCard && <Img src={chosenCard.image} alt={chosenCard.name} />}
          </ChosenCard>
          <Choice>YOU PICKED</Choice>
        </ChoiceWrapper>
        {chosenCard && houseCard && (
          <WinnerWrapperDesktop>
            <Winner>{result}</Winner>
            <Button onClick={onPlayAgain}>PLAY AGAIN</Button>
          </WinnerWrapperDesktop>
        )}
        <ChoiceWrapper>
          <ChoiceDesktop>THE HOUSE PICKED</ChoiceDesktop>
          <ChosenCard>
            {houseCard && <Img src={houseCard.image} alt={houseCard.name} />}
          </ChosenCard>
          <Choice>THE HOUSE PICKED</Choice>
        </ChoiceWrapper>
      </LetsPlay>
      {chosenCard && houseCard && (
        <WinnerWrapper>
          <Winner>{result}</Winner>
          <Button onClick={onPlayAgain}>PLAY AGAIN</Button>
        </WinnerWrapper>
      )}
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
  flex-shrink: 0;
  border-radius: 50%;
  @media (min-width: 768px) {
    width: 292.611px;
    height: 286.699px;
  }
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
  @media (min-width: 768px) {
    display: none;
  }
`;

const ChoiceDesktop = styled.span`
  color: #fff;
  text-align: center;
  text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
  font-family: Barlow Semi Condensed;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 3px;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;
const WinnerWrapper = styled.div`
  height: 125px;
  @media (min-width: 768px) {
    display: none;
  }
`;
const WinnerWrapperDesktop = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 287px;
    justify-content: center;
    align-items: center;
    gap: 16px;
    padding: 55px;
  }
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

const Img = styled.img`
  width: 130px;
  height: 133px;
  @media (min-width: 768px) {
    width: 292.611px;
    height: 286.699px;
  }
`;
