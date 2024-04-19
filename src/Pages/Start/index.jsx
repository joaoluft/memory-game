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
    playSound,
    setNameHandler,
  ] = useStart();

  return (
    <StyledSection>
      <StyledMainContainer>
        <StyledLogo draggable="false" src={logo} />
        <StyledContainer>
          <TextField
            onChange={setNameHandler}
            placeholder="Ex: John Doe"
          />
          <StyledSubTitle>Selecione a dificuldade:</StyledSubTitle>
          <Selector
            sound={playSound}
            itens={difficulties}
            current={data.difficulty}
            setOption={setData}
            type="difficulty"
          />
          <StyledSubTitle>Quantidade de cartas:</StyledSubTitle>
          <Selector
            sound={playSound}
            itens={sizes}
            current={data.size}
            setOption={setData}
            type="size"
          />
          <StyledButtonsContainer>
            <Button onClick={() => setStep(2)} disabled={disabled}>
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
