import styled from "styled-components";
import { Game, Header, Rules, StepOne } from "./components";
import { useEffect, useState } from "react";
import { default as data } from "./data.ts";

interface Card {
  name: string;
  win: string[];
  lose: string[];
}

function App() {
  const [showRules, setShowRules] = useState<boolean>(false);
  const [chosenCard, setChosenCard] = useState<Card | null>(null);
  const [showGame, setShowGame] = useState(true);
  const [houseCard, setHouseCard] = useState<Card | null>(null);
  const [result, setResult] = useState<string>("");
  const [score, setScore] = useState<number>(0);

  const handleChooseCard = (card: Card) => {
    setChosenCard(card);
  };

  const handlePlayAgain = () => {
    setChosenCard(null);
    setHouseCard(null);
    setShowGame(false);
  };

  const selectRandomCard = () => {
    const gameItems = Object.values(data);
    const randomIndex = Math.floor(Math.random() * gameItems.length);
    console.log(randomIndex);
    return gameItems[randomIndex];
  };
  useEffect(() => {
    if (!houseCard) {
      const timer = setTimeout(() => {
        setHouseCard(selectRandomCard());
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [houseCard]);

  useEffect(() => {
    if (chosenCard && houseCard) {
      if (chosenCard.name === houseCard.name) {
        setResult("IT'S A TIE");
      } else if (chosenCard.win.includes(houseCard.name)) {
        setResult("YOU WIN");
        setScore(score + 1);
      } else {
        setResult("YOU LOSE");
        setScore(score - 1);
      }
    }
  }, [chosenCard, houseCard]);

  return (
    <Wrapper>
      <Header score={score}></Header>
      {chosenCard ? (
        <Game
          chosenCard={chosenCard}
          houseCard={houseCard}
          onPlayAgain={handlePlayAgain}
          setHouseCard={setHouseCard}
          result={result}
          setResult={setResult}
        />
      ) : (
        <StepOne onChooseCard={handleChooseCard} />
      )}
      <RulesBtn
        onClick={() => {
          setShowRules(true);
        }}
      >
        <Text>rules</Text>
      </RulesBtn>
      {showRules ? (
        <Rules setShowRules={setShowRules} showRules={showRules} />
      ) : null}
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background: radial-gradient(
    134.34% 134.34% at 50% 0%,
    #1f3757 0%,
    #131537 100%
  );
  padding: 32px;
  padding-top: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    padding: 32px 32px 48px 32px;
  }
`;

const RulesBtn = styled.button`
  width: 128px;
  height: 48px;
  border: 1px solid white;
  background-color: transparent;
  margin-top: auto;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background: linear-gradient(0deg, #f3f3f3 0%, #ffffff 100%);
  }
  &:hover span {
    color: #3b4262;
  }
  @media (min-width: 768px) {
    margin-left: auto;
  }
`;

const Text = styled.span`
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
  line-height: 19.2px;
  letter-spacing: 2.5px;
  color: white;
`;
