import { FaPlay } from "react-icons/fa";
import { difficulties, sizes } from "Constants/data";
import { TextField } from "Components/TextField";
import { Button } from "Components/Button";
import { Selector } from "Components/Start";
import { useStart } from "Hooks/useStart";
import {
  StyledSection,
  StyledContainer,
  StyledSubTitle,
  StyledLogo,
  StyledMainContainer,
  StyledButtonsContainer,
  StyledParagraph,
} from "Pages/Start/styles";
import logo from "Assets/logo.png";
import { MdLeaderboard } from "react-icons/md";

export const Start = ({ setStep }) => {
  const [
    data,
    setData,
    disabled,
    startGameHandler,
    setNameInput,
  ] = useStart(setStep);

  return (
    <StyledSection>
      <StyledMainContainer>
        <StyledLogo draggable="false" src={logo} />
        <StyledContainer>
          <TextField onChange={(e) => setNameInput(e.target.value.trim())} placeholder="Ex: John Doe" />
          <StyledSubTitle>Selecione a dificuldade:</StyledSubTitle>
          <Selector
            itens={difficulties}
            current={data.difficulty}
            setOption={setData}
            type="difficulty"
          />
          <StyledSubTitle>Quantidade de cartas:</StyledSubTitle>
          <Selector
            itens={sizes}
            current={data.size}
            setOption={setData}
            type="size"
          />
          <StyledButtonsContainer>
            <Button onClick={startGameHandler} disabled={disabled}>
              <FaPlay />
              <span>Iniciar</span>
            </Button>
            <Button color="lightBlue" onClick={() => setStep(3)}>
              <MdLeaderboard />
              <span>Ver placar</span>
            </Button>
          </StyledButtonsContainer>
          <StyledParagraph>
            {disabled
              ? "*Para iniciar seu jogo, complete as informações do formulário acima!"
              : 'Clique em "INICIAR" para iniciar sua partida de jogo da memória.'}
          </StyledParagraph>
        </StyledContainer>
      </StyledMainContainer>
    </StyledSection>
  );
};
