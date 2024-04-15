import { useCards } from "Hooks/useCards";
import { StyledContainer } from "Pages/Cards/styles";

export const Cards = ({ setStep }) => {
  const [renderCards] = useCards(setStep);

  return <StyledContainer>{renderCards()}</StyledContainer>;
};
