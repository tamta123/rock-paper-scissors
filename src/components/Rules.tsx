import styled from "styled-components";
// import { Schema } from "../photos";
import { Close } from "../svg";

const Rules: React.FC<{
  showRules: boolean;
  setShowRules: (bool: boolean) => void;
}> = (props) => {
  return (
    <Modal>
      <Container>
        <RulesWrapper>
          <Title>RULES</Title>
          <BtnDesktop onClick={() => props.setShowRules(false)}>
            <Close />
          </BtnDesktop>
        </RulesWrapper>
        <img src="public/image-rules-bonus.svg" alt="Rules Image" />
        <BtnMobile onClick={() => props.setShowRules(false)}>
          <Close />
        </BtnMobile>
      </Container>
    </Modal>
  );
};

export default Rules;

const Modal = styled.div`
  width: 100%;
  height: 100%;
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(1, 1, 1, 0.3);
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
  @media (min-width: 768px) {
    width: 400px;
    height: auto;
    padding: 32px 32px 47px 32px;
    justify-content: flex-start;
    border-radius: 8px;
  }
`;

const RulesWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }
`;

const Title = styled.h3`
  color: #3b4262;
  font-family: Barlow Semi Condensed;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
`;

const BtnMobile = styled.div`
  display: block;
  border: none;
  outline: none;
  background-color: none;
  @media (min-width: 768px) {
    display: none;
    width: 20px;
    height: 20px;
  }
`;
const BtnDesktop = styled.div`
  display: none;
  border: none;
  outline: none;
  background-color: none;
  @media (min-width: 768px) {
    display: block;
    width: 20px;
    height: 20px;
  }
`;
