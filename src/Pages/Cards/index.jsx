import { useCards } from "Hooks/useCards";
import { StyledContainer } from "Pages/Cards/styles";

export const Cards = () => {
  const [renderCards] = useCards();

  return <StyledContainer>{renderCards()}</StyledContainer>;
};
