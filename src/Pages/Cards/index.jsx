import { useCards } from "Hooks/useCards";
import {
  StyledContainer,
  StyledCardsContainer,
  StyledHeader,
  StyledPoints,
  StyledTimerContainer,
  StyledUserName,
  StyledCenterContainer,
} from "Pages/Cards/styles";
import { Timer } from "Components/Timer";

export const Cards = ({ setStep }) => {
  const [renderCards, match, endGame, formattedTime, data] = useCards(setStep);

  return (
    <StyledContainer>
      {!endGame && (
        <StyledHeader>
          <StyledTimerContainer>
            <Timer time={formattedTime} />
          </StyledTimerContainer>
          <StyledUserName>{data.name}</StyledUserName>
          <StyledPoints>Pontos: {match.points}</StyledPoints>
        </StyledHeader>
      )}
      <StyledCenterContainer>
        <StyledCardsContainer>{renderCards()}</StyledCardsContainer>
      </StyledCenterContainer>
    </StyledContainer>
  );
};
