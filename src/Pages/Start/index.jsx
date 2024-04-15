import { FaPlay } from "react-icons/fa";
import { difficulties, sizes } from "Constants/data";
import { TextField } from "Components/TextField";
import { Button } from "Components/Button";
import { Selector } from "Components/Start";
import { useStart } from "Hooks/useStart";
import {
  StyledSection,
  StyledContainer,
  StyledTitle,
  StyledSubTitle,
} from "Pages/Start/styles";

export const Start = ({ setStep }) => {
  const [data, setData, disabled, userNameHandler, startGameHandler] =
    useStart(setStep);

  return (
    <StyledSection>
      <StyledTitle>Jogo da Memória - Pokémons</StyledTitle>
      <StyledContainer>
        <TextField onChange={userNameHandler} placeholder="Insira seu nome" />
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
        <Button onClick={startGameHandler} disabled={disabled}>
          <FaPlay />
          <span>Iniciar</span>
        </Button>
      </StyledContainer>
    </StyledSection>
  );
};
