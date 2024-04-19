import badPikachu from "/Assets/Emotions/bad.gif";
import mediumPikachu from "/Assets/Emotions/medium.gif";
import greatPikachu from "/Assets/Emotions/great.gif";
import {
  StyledContainer,
  StyledTitle,
  StyledParagraph,
  StyledSubTitle,
  StyledButtonContainer,
} from "Components/EndCard/styles";
import { Button } from "Components/Button";
import { formatTime } from "src/utils";
import { useEndCard } from "Hooks/useEndCard";

export const EndCard = ({ setStep, data }) => {
  const { points, time, moves, size } = data;
  useEndCard();

  const getEmotion = (points) => {
    const accuracy = (points / (100 * size)) * 100;

    if (accuracy < 40) {
      return {
        result: "Ruim",
        image: badPikachu,
      };
    } else if (accuracy >= 40 && accuracy < 60) {
      return {
        result: "Mediano",
        image: mediumPikachu,
      };
    } else {
      return {
        result: "Excelente",
        image: greatPikachu,
      };
    }
  };

  return (
    <StyledContainer>
      <img src={getEmotion(points).image} />
      <StyledTitle>Fim do jogo!</StyledTitle>
      <StyledSubTitle>{getEmotion(points).result}!</StyledSubTitle>
      <StyledParagraph>Pontos: {points}</StyledParagraph>
      <StyledParagraph>Tempo: {formatTime(time)}</StyledParagraph>
      <StyledParagraph>Movimentos: {moves}</StyledParagraph>
      <StyledButtonContainer>
        <Button color="purple" fontColor="light" onClick={() => setStep(1)}>
          Reiniciar
        </Button>
        <Button color="blue" fontColor="light" onClick={() => setStep(3)}>
          Ver placar
        </Button>
      </StyledButtonContainer>
    </StyledContainer>
  );
};
