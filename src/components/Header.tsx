import styled from "styled-components";

interface HeaderProps {
  score: number;
}

const Header: React.FC<HeaderProps> = ({ score }) => {
  return (
    <Main>
      <Name>
        <span>ROCK</span>
        <span>PAPER</span>
        <span>SCISSORS</span>
        <span>LIZARD</span>
        <span>SPOCK</span>
      </Name>
      <Score>
        <Text>SCORE</Text>
        <Number>{score}</Number>
      </Score>
    </Main>
  );
};

export default Header;

const Main = styled.main`
  width: 100%;
  height: auto;
  padding: 12px;
  border-radius: 15px;
  border: 3px solid rgba(255, 255, 255, 0.29);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

const Name = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
  font-family: Barlow Semi Condensed;
  font-size: 21px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  @media (min-width: 768px) {
    width: 50%;
    color: #fff;
    text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
  }
`;

const Score = styled.div`
  padding: 10px 24px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: linear-gradient(0deg, #f3f3f3 0%, #fff 100%);
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
  @media (min-width: 768px) {
    height: 134px;
    gap: 14px;
    display: flex;
    flex-direction: column;
  }
`;

const Text = styled.div`
  color: #2a45c2;
  text-align: center;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 1.563px;
  @media (min-width: 768px) {
    font-size: 26px;
  }
`;

const Number = styled.div`
  color: #565468;
  text-align: center;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
  @media (min-width: 768px) {
    font-size: 80px;
    height: 80px;
  }
`;
