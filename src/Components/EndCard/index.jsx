import badPikachu from "Assets/Emotions/bad.gif";
import mediumPikachu from "Assets/Emotions/medium.gif";
import greatPikachu from "Assets/Emotions/great.gif";
import {
  StyledContainer,
  StyledTitle,
  StyledParagraph,
  StyledSubTitle,
  StyledButtonContainer
} from "Components/EndCard/styles";
import { Button } from "Components/Button";

export const EndCard = ({ setStep, data }) => {
  const { points, time, moves } = data;

  const getEmotion = (points) => {
    const bad = points > 30 && points < 50;
    const medium = points > 50 && points < 70;
    const great = points > 70;

    if (bad) {
      return {
        result: "Ruim",
        image: badPikachu,
      };
    } else if (medium) {
      return {
        result: "Médio",
        image: mediumPikachu,
      };
    } else if (great) {
      return {
        result: "Excelente",
        image: greatPikachu,
      };
    }

    return {
      result: "Ruim",
      image: badPikachu,
    };
  };

  return (
    <StyledContainer>
      <img src={getEmotion(points).image} />
      <StyledTitle>Fim do jogo!</StyledTitle>
      <StyledSubTitle>{getEmotion(points).result}!</StyledSubTitle>
      <StyledParagraph>Pontos: {points}</StyledParagraph>
      <StyledParagraph>Tempo: {time}</StyledParagraph>
      <StyledParagraph>Movimentos: {moves}</StyledParagraph>
      <StyledButtonContainer>
        <Button onClick={() => setStep(1)}>Reiniciar</Button>
        <Button>Ver placar</Button>
      </StyledButtonContainer>
    </StyledContainer>
  );
};
