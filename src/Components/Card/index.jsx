import { StyledCard, StyledFront, StyledBack } from "Components/Card/styles";
import { useCard } from "Hooks/useCard";
import backCard from "Assets/Cards/back.png";

export const Card = ({ id, flipped, visible, selectCardHandler }) => {
  const [card, cardClickHandler] = useCard(id, selectCardHandler);

  return (
    <StyledCard
      $visible={visible}
      $flipped={flipped}
      onClick={() => cardClickHandler(id)}
    >
      <StyledFront $image={card.image} />
      <StyledBack $image={backCard} />
    </StyledCard>
  );
};