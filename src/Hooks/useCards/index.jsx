import { useState } from "react";
import { cards as cardsList } from "Constants/data";
import { StyledCard } from "Pages/Cards/styles";

export const useCards = () => {
  const [cards, setCards] = useState([]);

  const randomizeDoubleCards = () => {
    return cards
  };

  const renderCards = () => {
    return randomizeDoubleCards().map((card) => (
      <StyledCard key={card.id}>
        <span>{card.name}</span>
      </StyledCard>
    ));
  };

  return [renderCards];
};
